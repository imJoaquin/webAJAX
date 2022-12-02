let menuPrincipalItems = [
  "Revistas", 
  "Inventario"];

let menuPrincipalFunciones = [
  "despliegaMenuRevistas()", 
  "despliegaMenuInventario()"];

let menuRevistasItems = [
  "Agregar revista",
  "Consultar revista",
  "Listar  revistas",
  "Página inicial"
];

let menuRevistasFunciones = [
  "capturaISBN()",
  "despliegaRevista()",
  "listarRevistas()",
  "despliegaMenuPrincipal()"
];

let menuInventarioItems = [
  "Inventariar revista",
  "Consulta inventario",
  "Página inicial"
];

let menuInventarioFunciones = [
  "capturaRevistaInventariar()",
  "despliegaInventarioRevistas()",
  "despliegaMenuPrincipal()"
];

function despliegaMenuPrincipal(){
  borraHijos("mainId");

  borraHijos("navId");
  despliegaMenu("navId", menuPrincipalItems, menuPrincipalFunciones);
}

function despliegaMenuRevistas(){
  borraHijos("navId");

  despliegaMenu("navId", menuRevistasItems, menuRevistasFunciones);
}

function despliegaMenuInventario(){

  borraHijos("navId");

  despliegaMenu("navId", menuInventarioItems, menuInventarioFunciones);

}