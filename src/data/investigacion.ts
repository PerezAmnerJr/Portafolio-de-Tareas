// src/data/investigacion.ts

export type Item = {
  term: string;
  def: string;
};

export const ITEMS: Item[] = [
  {
    term: "Input",
    def: "Elemento HTML que permite capturar datos del usuario como texto, números, correos, etc."
  },
  {
    term: "Textarea",
    def: "Permite ingresar texto en varias líneas, útil para comentarios o descripciones largas."
  },
  {
    term: "Select",
    def: "Crea una lista desplegable para seleccionar una opción."
  },
  {
    term: "Placeholder",
    def: "Texto guía que aparece dentro de un input antes de escribir."
  },
  {
    term: "Responsive",
    def: "Diseño que se adapta a diferentes tamaños de pantalla usando CSS y media queries."
  }
];

export default ITEMS;
