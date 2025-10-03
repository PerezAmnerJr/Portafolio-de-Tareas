import { useEffect, useMemo, useState } from "react";

// ====== Tipos ======
type Entry = {
  titulo: string;   // ej. "Hook useState"
  letra: string;    // ej. "H"
  contenido: string;
};

// ====== Utilidades ======
const ABC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

function groupByLetter(entries: Entry[]) {
  const map = new Map<string, Entry[]>();
  for (const e of entries) {
    const k = e.letra.toUpperCase();
    if (!map.has(k)) map.set(k, []);
    map.get(k)!.push(e);
  }
  // ordenar internamente por título
  for (const [, arr] of map.entries()) {
    arr.sort((a, b) => a.titulo.localeCompare(b.titulo));
  }
  return map;
}

/**
 * Parseador simple:
 * - Busca cabeceras que empiecen con "Hook " (ej. "Hook useState")
 * - Toma el bloque de texto hasta la siguiente cabecera
 */
function parseHooksFromTxt(txt: string): Entry[] {
  const lines = txt.split(/\r?\n/).map(l => l.trim());
  const entries: Entry[] = [];
  let currentTitle: string | null = null;
  let buffer: string[] = [];

  const flush = () => {
    if (currentTitle) {
      const content = buffer.join("\n").trim();
      const letra = (currentTitle[0] || "#").toUpperCase();
      entries.push({ titulo: currentTitle, letra, contenido: content });
    }
    currentTitle = null;
    buffer = [];
  };

  for (const line of lines) {
    // detecta cabeceras tipo "Hook useX"
    if (/^Hook\s+use/i.test(line)) {
      // si había uno anterior, guardarlo
      flush();
      currentTitle = line;
    } else {
      buffer.push(line);
    }
  }
  flush();

  // Fallback: si no encontró nada, crear una sola entrada
  if (entries.length === 0 && txt.trim().length) {
    entries.push({
      titulo: "Documento",
      letra: "D",
      contenido: txt.trim(),
    });
  }

  // Limpieza: quita líneas vacías arriba/abajo
  return entries.map(e => ({
    ...e,
    contenido: e.contenido.replace(/^\s+|\s+$/g, ""),
  }));
}

// ====== Componente ======
export default function InvestigacionGlosario() {
  const [raw, setRaw] = useState<string>("");
  const [busqueda, setBusqueda] = useState<string>("");
  const [letraActiva, setLetraActiva] = useState<string>("");

  // Cargar texto plano del PDF (ya extraído)
  useEffect(() => {
    fetch("/text/Hooks_React.txt", { cache: "no-store" })
      .then(r => r.text())
      .then(setRaw)
      .catch(() => setRaw("No se pudo cargar el texto."));
  }, []);

  // Parsear a entradas (useState, useEffect, etc.)
  const entries = useMemo<Entry[]>(() => parseHooksFromTxt(raw), [raw]);

  // Filtrar por búsqueda y letra
  const filtradas = useMemo<Entry[]>(() => {
    const q = busqueda.trim().toLowerCase();
    return entries.filter(e => {
      const byLetter = letraActiva ? e.letra === letraActiva : true;
      if (!q) return byLetter;
      return (
        byLetter &&
        (e.titulo.toLowerCase().includes(q) ||
          e.contenido.toLowerCase().includes(q))
      );
    });
  }, [entries, busqueda, letraActiva]);

  // Agrupar por letra y ordenar
  const grupos = useMemo(() => {
    return groupByLetter(filtradas);
  }, [filtradas]);

  // Para counters y botón "Todos"
  const totalFiltrado = filtradas.length;

  return (
    <section className="container my-5">
      <h2 className="mb-2 text-primary">Investigación</h2>
      <p className="text-secondary mb-4">
        Glosario de términos (Hooks en React) — texto plano extraído del PDF.
      </p>

      {/* Pestañas simuladas / botón activo */}
      <ul className="nav nav-pills mb-3">
        <li className="nav-item">
          <button
            className={`nav-link ${letraActiva === "" ? "active" : ""}`}
            onClick={() => setLetraActiva("")}
          >
            Todos <span className="badge bg-light text-dark ms-1">{totalFiltrado}</span>
          </button>
        </li>
        {ABC.map((L) => {
          const count = grupos.get(L)?.length ?? 0;
          return (
            <li className="nav-item" key={L}>
              <button
                className={`nav-link ${letraActiva === L ? "active" : ""}`}
                onClick={() => setLetraActiva(L)}
                disabled={count === 0}
              >
                {L} {count > 0 && <span className="badge bg-light text-dark ms-1">{count}</span>}
              </button>
            </li>
          );
        })}
      </ul>

      {/* Buscador */}
      <div className="mb-3">
        <input
          type="text"
          className="form-control form-control-lg"
          placeholder="Buscar término o definición…"
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />
      </div>

      {/* Grupos por letra (accordion) */}
      <div className="accordion" id="accordionGlosario">
        {[...grupos.keys()].sort().map((L,) => {
          const items = grupos.get(L) ?? [];
          if (items.length === 0) return null;
          const groupId = `grp-${L}`;
          const headingId = `heading-${L}`;
          const collapseId = `collapse-${L}`;
          return (
            <div className="accordion-item" key={groupId}>
              <h2 className="accordion-header" id={headingId}>
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#${collapseId}`}
                  aria-expanded="false"
                  aria-controls={collapseId}
                >
                  {L} <span className="badge bg-secondary ms-2">{items.length}</span>
                </button>
              </h2>
              <div
                id={collapseId}
                className="accordion-collapse collapse"
                aria-labelledby={headingId}
                data-bs-parent="#accordionGlosario"
              >
                <div className="accordion-body p-0">
                  <ul className="list-group list-group-flush">
                    {items.map((e) => (
                      <li key={e.titulo} className="list-group-item">
                        <div className="d-flex align-items-center justify-content-between">
                          <h6 className="mb-2">{e.titulo}</h6>
                          {/* Enlace al PDF completo por si quieres abrirlo */}
                          <a
                            className="btn btn-sm btn-outline-primary"
                            href="/pdf/Hooks_React.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Ver PDF
                          </a>
                        </div>
                        <pre className="mb-0" style={{ whiteSpace: "pre-wrap" }}>
                          {e.contenido}
                        </pre>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}

        {/* Sin resultados */}
        {totalFiltrado === 0 && (
          <div className="alert alert-dark mt-3" role="alert">
            No hay resultados para tu búsqueda/filtro.
          </div>
        )}
      </div>
    </section>
  );
}
