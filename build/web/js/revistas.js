var isbnRevista;
var tipoCategoria;
const revistas = [];

function capturaISBN() {
  borraHijos("mainId");

  let padre = document.getElementById("mainId");

  let titulo = document.createElement("h1");
  titulo.innerHTML = "Captura ISBN de la Revista";

  padre.appendChild(titulo);

  let formulario = document.createElement("form");

  padre.appendChild(formulario);

  let contenedorFormulario = document.createElement("div");

  contenedorFormulario.setAttribute("class", "contenedorFormulario");

  formulario.appendChild(contenedorFormulario);

  let celdaEtiqClave = document.createElement("div");
  celdaEtiqClave.setAttribute("class", "derecha");

  contenedorFormulario.appendChild(celdaEtiqClave);

  let etiqIsbnRevista = document.createElement("label");

  etiqIsbnRevista.setAttribute("for", "campoIsbnRevistaId");

  etiqIsbnRevista.innerHTML = "ISBN *";

  celdaEtiqClave.appendChild(etiqIsbnRevista);

  let celdaIsbnRevista = document.createElement("div");

  celdaIsbnRevista.setAttribute("id", "celdaIsbnRevistaId");

  contenedorFormulario.appendChild(celdaIsbnRevista);

  let campoIsbnRevista = document.createElement("input");

  campoIsbnRevista.setAttribute("type", "text");

  campoIsbnRevista.setAttribute("id", "campoIsbnRevista");

  campoIsbnRevista.setAttribute("size", "7");

  campoIsbnRevista.setAttribute("maxlength", "7");

  campoIsbnRevista.setAttribute(
    "title",
    "Tres letras mayúsculas seguida de 4 dígitos"
  );

  celdaIsbnRevista.appendChild(campoIsbnRevista);

  let celdaVacia = document.createElement("div");

  celdaVacia.setAttribute("class", "span centrada");

  celdaVacia.innerHTML = "&nbsp;";

  contenedorFormulario.appendChild(celdaVacia);

  let celdaBoton = document.createElement("div");

  celdaBoton.setAttribute("class", "span centrada");

  contenedorFormulario.appendChild(celdaBoton);

  let boton = document.createElement("button");

  boton.setAttribute("type", "button");

  boton.setAttribute("onclick", "validaISBN()");

  boton.innerHTML = "Enviar";

  celdaBoton.appendChild(boton);

  let celdaVacia2 = document.createElement("div");

  celdaVacia2.setAttribute("class", "span centrada");

  celdaVacia2.innerHTML = "&nbsp;";

  contenedorFormulario.appendChild(celdaVacia2);

  let resultados = document.createElement("div");

  resultados.setAttribute("id", "resultadosId");

  padre.appendChild(resultados);
}

function capturaRevista() {
  isbnRevista = document.getElementById("campoIsbnRevista").value;

  borraHijos("mainId");

  let padre = document.getElementById("mainId");

  let titulo = document.createElement("h1");

  titulo.innerHTML = "Captura Revista";

  padre.appendChild(titulo);

  let formulario = document.createElement("form");

  padre.append(formulario);

  let contenedorFormulario = document.createElement("div");

  contenedorFormulario.setAttribute("class", "contenedorFormulario");

  formulario.appendChild(contenedorFormulario);

  let celdaEtiqClave = document.createElement("div");

  celdaEtiqClave.setAttribute("class", "derecha");

  contenedorFormulario.appendChild(celdaEtiqClave);

  let etiqIsbnRevista = document.createElement("label");

  etiqIsbnRevista.setAttribute("for", "campoIsbnRevistaId");

  etiqIsbnRevista.innerHTML = "ISBN *";

  celdaEtiqClave.appendChild(etiqIsbnRevista);

  //Celda Isbn
  let celdaIsbnRevista = document.createElement("div");

  celdaIsbnRevista.setAttribute("id", "celdaIsbnRevistaId");

  contenedorFormulario.appendChild(celdaIsbnRevista);

  //Campo Isbn
  let campoIsbnRevista = document.createElement("input");

  campoIsbnRevista.setAttribute("type", "text");

  campoIsbnRevista.setAttribute("id", "campoIsbnRevistaId");

  campoIsbnRevista.setAttribute("size", "7");

  campoIsbnRevista.setAttribute(
    "title",
    "Tres letras mayúsculas seguidas de 4 dígitos"
  );

  campoIsbnRevista.setAttribute("readonly", "readonly");

  campoIsbnRevista.setAttribute("value", isbnRevista);

  celdaIsbnRevista.appendChild(campoIsbnRevista);

  //Celda Nombre
  let celdaEtiqNombre = document.createElement("div");

  celdaEtiqNombre.setAttribute("class", "derecha");

  contenedorFormulario.appendChild(celdaEtiqNombre);

  let etiqNombre = document.createElement("label");

  etiqNombre.setAttribute("for", "campoNombreId");

  etiqNombre.innerHTML = "Titulo *";

  celdaEtiqNombre.appendChild(etiqNombre);

  let celdaNombre = document.createElement("div");

  celdaEtiqClave.setAttribute("id", "celdaNombreId");

  contenedorFormulario.appendChild(celdaNombre);

  //Campo nombre
  let campoNombre = document.createElement("input");

  campoNombre.setAttribute("type", "text");

  campoNombre.setAttribute("id", "campoNombreId");

  campoNombre.setAttribute("size", "50");

  campoNombre.setAttribute("maxlength", "50");

  campoNombre.setAttribute("title", "Máximo 50 caracteres");

  celdaNombre.appendChild(campoNombre);

  //Celda editorial
  let celdaEtiqEditorial = document.createElement("div");

  celdaEtiqEditorial.setAttribute("class", "derecha");

  contenedorFormulario.appendChild(celdaEtiqEditorial);

  let etiqEditorial = document.createElement("label");

  etiqEditorial.setAttribute("for", "campoEditorialId");

  etiqEditorial.innerHTML = "Editorial *";

  celdaEtiqEditorial.appendChild(etiqEditorial);

  let celdaEditorial = document.createElement("div");

  celdaEditorial.setAttribute("id", "celdaEditorial");

  contenedorFormulario.appendChild(celdaEditorial);

  //Campo editorial
  let campoEditorial = document.createElement("input");

  campoEditorial.setAttribute("type", "text");

  campoEditorial.setAttribute("id", "campoEditorialId");

  campoEditorial.setAttribute("size", "35");

  campoEditorial.setAttribute("maxlength", "35");

  campoEditorial.setAttribute("title", "Máximo 35 caracteres");

  celdaEditorial.appendChild(campoEditorial);

  //Crear celda etiqueta del tipo de categoria
  let celdaEtiqCategoria = document.createElement("div");

  celdaEtiqCategoria.setAttribute("class", "derecha");

  contenedorFormulario.appendChild(celdaEtiqCategoria);

  let etiqCategoria = document.createElement("label");

  etiqCategoria.setAttribute("for", "tipoCategoriaId");

  etiqCategoria.innerHTML = "Clasificación *";

  celdaEtiqCategoria.appendChild(etiqCategoria);

  let celdaCategoria = document.createElement("div");

  celdaCategoria.setAttribute("id", "celdaCategoriaId");

  contenedorFormulario.appendChild(celdaCategoria);

  let valores = ["Noticias", "Gaming", "Deportes", "Gossip"];
  despliegaListaSel(
    "celdaCategoriaId",
    "tipoCategoriaId",
    valores,
    valores,
    null
  );

  //Crear celda etiqueta de periodicidad
  let celdaEtiqPeriodicidad = document.createElement("div");

  celdaEtiqPeriodicidad.setAttribute("class", "derecha");

  contenedorFormulario.appendChild(celdaEtiqPeriodicidad);

  let etiqPeriodicidad = document.createElement("label");

  etiqPeriodicidad.setAttribute("for", "periodicidadId");

  etiqPeriodicidad.innerHTML = "Periodicidad *";

  celdaEtiqPeriodicidad.appendChild(etiqPeriodicidad);

  let celdaPeriodicidad = document.createElement("div");

  celdaPeriodicidad.setAttribute("id", "celdaPeriodicidadId");

  contenedorFormulario.appendChild(celdaPeriodicidad);

  let valoresPeriodicidad = [
    "Diaria",
    "Semanal",
    "Quincenal",
    "Mensual",
    "Anual",
  ];
  despliegaListaSel(
    "celdaPeriodicidadId",
    "periodicidadId",
    valoresPeriodicidad,
    valoresPeriodicidad,
    null
  );

  //Celda fecha
  let celdaEtiqFecha = document.createElement("div");

  celdaEtiqFecha.setAttribute("class", "derecha");

  contenedorFormulario.appendChild(celdaEtiqFecha);

  let etiqFecha = document.createElement("label");

  etiqFecha.setAttribute("for", "campoFechaId");

  etiqFecha.innerHTML = "Fecha *";

  celdaEtiqFecha.appendChild(etiqFecha);

  let celdaFecha = document.createElement("div");

  celdaFecha.setAttribute("id", "celdaFechaId");

  contenedorFormulario.appendChild(celdaFecha);

  //Campo año publicacion
  let campoFecha = document.createElement("input");

  campoFecha.setAttribute("type", "date");

  campoFecha.setAttribute("id", "campoFechaId");

  celdaFecha.appendChild(campoFecha);

  //Boton enviar
  let celdaVacia = document.createElement("div");

  celdaVacia.setAttribute("class", "span centrada");

  celdaVacia.innerHTML = "&nbsp;";

  contenedorFormulario.appendChild(celdaVacia);

  // Crea una celda con boton enviar
  let celdaBoton = document.createElement("div");

  celdaBoton.setAttribute("class", "span centrada");

  contenedorFormulario.appendChild(celdaBoton);

  // Crea un boton
  let boton = document.createElement("button");

  boton.setAttribute("type", "button");

  boton.setAttribute("onclick", "creaRevista()");

  boton.innerHTML = "Enviar";

  celdaBoton.appendChild(boton);

  // Crea una celda en blanco
  let celdaVacia2 = document.createElement("div");

  celdaVacia2.setAttribute("class", "span centrada");

  celdaVacia2.innerHTML = "&nbsp;";

  contenedorFormulario.appendChild(celdaVacia2);

  // Crea una seccion para mostrar resultados
  let resultados = document.createElement("div");

  resultados.setAttribute("id", "resultadosId");

  padre.appendChild(resultados);
}

//Listar
function listarRevistas() {
  borraHijos("mainId");

  // Obten el elemento dentro del que se desplegara el formulario.
  let padre = document.getElementById("mainId");

  // Crea un titulo
  let titulo = document.createElement("h1");
  // Le agrega el texto al titulo
  titulo.innerHTML = "Lista de Revistas";
  // Agrega el titulo a su elemento padre
  padre.appendChild(titulo);

  // Crea un formulario
  let formulario = document.createElement("form");
  // Agrega el formulario a su elemento padre
  padre.appendChild(formulario);

  // Crea un layout tipo cuadricula
  let contenedorFormulario = document.createElement("div");
  // Establece el atributo class de la tabla
  contenedorFormulario.setAttribute("class", "contenedorFormulario");
  // Agrega la tabla al formulario
  formulario.appendChild(contenedorFormulario);

  // Crea celda para la etiqueta del tipo de genero
  let celdaEtiqCategoria = document.createElement("div");
  // Establece el atributo class de la celda
  celdaEtiqCategoria.setAttribute("class", "derecha");
  // Agrega la celda a la fila
  contenedorFormulario.appendChild(celdaEtiqCategoria);

  // Crea una etiqueta del tipo del genero
  let etiqCategoria = document.createElement("label");
  // Establece el atributo for de la etiqueta
  etiqCategoria.setAttribute("for", "tipoCategoriaId");
  // Le agrega el texto a la etiqueta
  etiqCategoria.innerHTML = "Tipo de Categoría *";
  // Agrega la etiqueta a la celda
  celdaEtiqCategoria.appendChild(etiqCategoria);

  // Crea celda para campo de texto para capturar el tipo del genero
  let celdaCategoria = document.createElement("div");
  // Establece el atributo class de la celda
  celdaCategoria.setAttribute("class", "celda");
  // Establece el atributo id de la celda
  celdaCategoria.setAttribute("id", "celdaCategoriaId");
  // Agrega la celda a la fila
  contenedorFormulario.appendChild(celdaCategoria);

  // Agrega una lista de seleccion para seleccionar
  // el tipo de medio del genero a listar
  let valores = ["Todos", "Noticias", "Gaming", "Deportes", "Gossip"];
  let sel = "Todos";
  despliegaListaSel(
    "celdaCategoriaId",
    "tipoCategoriaId",
    valores,
    valores,
    sel
  );

  // Crea una celda en blanco
  let celdaVacia = document.createElement("div");
  // Establece el atributo class del titulo
  celdaVacia.setAttribute("class", "span centrada");
  // Le agrega el texto al titulo
  celdaVacia.innerHTML = "&nbsp;";
  // Agrega el titulo a su elemento padre
  contenedorFormulario.appendChild(celdaVacia);

  // Crea una celda con boton enviar
  let celdaBoton = document.createElement("div");
  // Establece el atributo class de la tabla
  celdaBoton.setAttribute("class", "span centrada");
  // Agrega la tabla al formulario
  contenedorFormulario.appendChild(celdaBoton);

  // Crea un boton
  let boton = document.createElement("button");
  // Establece el atributo type del boton
  boton.setAttribute("type", "button");
  // Establece el nombre de la funcion

  boton.setAttribute("onclick", "despliegaRevistas()");
  // Establece el texto del boton
  boton.innerHTML = "Enviar";
  // Agrega el boton
  celdaBoton.appendChild(boton);

  // Crea una celda en blanco
  let celdaVacia2 = document.createElement("div");
  // Establece el atributo class del titulo
  celdaVacia2.setAttribute("class", "span centrada");
  // Le agrega el texto al titulo
  celdaVacia2.innerHTML = "&nbsp;";
  // Agrega el titulo a su elemento padre
  contenedorFormulario.appendChild(celdaVacia2);

  // Crea una seccion para mostrar resultados
  let resultados = document.createElement("div");
  // Establece el atributo id de la seccion
  resultados.setAttribute("id", "resultadosId");
  // Agrega la celda a la fila
  padre.appendChild(resultados);
}

//
function despliegaRevistas() {
  clasificacion = document.getElementById("tipoCategoriaId").value;
  borraHijos("resultadosId");

  let titulo = null;
  let categorias = null;
  switch (clasificacion) {
    case "Todos":
      titulo = "Revistas de Noticias";
      categorias = [];
      for (let index = 0; index < revistas.length; index++) {
        const element = revistas[index];
        let elementToPush = {
          isbnRevista: element.ISBN,
          titulo: element.titulo,
          editorial: element.editorial,
          clasificacion: element.clasificacion,
          periodicidad: element.periodicidad,
          fecha: element.fecha,
        };

        categorias.push(elementToPush);
      }
      break;
    case "Noticias":
      titulo = "Revistas de Noticias";
      categorias = [];
      for (let index = 0; index < revistas.length; index++) {
        const element = revistas[index];

        if (element.clasificacion === clasificacion) {
          let elementToPush = {
            isbnRevista: element.ISBN,
            titulo: element.titulo,
            editorial: element.editorial,
            clasificacion: element.clasificacion,
            periodicidad: element.periodicidad,
            fecha: element.fecha,
          };

          categorias.push(elementToPush);
        }
      }
      break;
    case "Gaming":
      titulo = "Revistas de Gaming";
      categorias = [];
      for (let index = 0; index < revistas.length; index++) {
        const element = revistas[index];

        if (element.clasificacion === clasificacion) {
          let elementToPush = {
            isbnRevista: element.ISBN,
            titulo: element.titulo,
            editorial: element.editorial,
            clasificacion: element.clasificacion,
            periodicidad: element.periodicidad,
            fecha: element.fecha,
          };

          categorias.push(elementToPush);
        }
      }
      break;
    case "Deportes":
      titulo = "Revistas de Deportes";
      categorias = [];
      for (let index = 0; index < revistas.length; index++) {
        const element = revistas[index];

        if (element.clasificacion === clasificacion) {
          let elementToPush = {
            isbnRevista: element.ISBN,
            titulo: element.titulo,
            editorial: element.editorial,
            clasificacion: element.clasificacion,
            periodicidad: element.periodicidad,
            fecha: element.fecha,
          };

          categorias.push(elementToPush);
        }
      }
      break;
    case "Gossip":
      titulo = "Revistas de Gossip";
      categorias = [];
      for (let index = 0; index < revistas.length; index++) {
        const element = revistas[index];

        if (element.clasificacion === clasificacion) {
          let elementToPush = {
            isbnRevista: element.ISBN,
            titulo: element.titulo,
            editorial: element.editorial,
            clasificacion: element.clasificacion,
            periodicidad: element.periodicidad,
            fecha: element.fecha,
          };

          categorias.push(elementToPush);
        }
      }
      break;
  }

  let encabezados = [
    "ISBN",
    "Titulo",
    "Editorial",
    "Clasificación",
    "Periodicidad",
    "Fecha",
  ];

  despliegaTabla("resultadosId", titulo, encabezados, categorias);
}

function creaRevista() {
  let ISBN = document.getElementById("campoIsbnRevistaId").value;
  let titulo = document.getElementById("campoNombreId").value;
  let editorial = document.getElementById("campoEditorialId").value;
  let clasificacion = document.getElementById("tipoCategoriaId").value;
  let periodicidad = document.getElementById("periodicidadId").value;
  let fecha = document.getElementById("campoFechaId").value;

  console.log(revistas.length);
  for (let index = 0; index < revistas.length; index++) {
    const element = revistas[index];
    
    if(element.ISBN == ISBN){
      return console.log("YA EXISTE COMPARE");
    }else if(index == revistas.length - 1){
      break;
    }

      

  }

  let revista = {
    ISBN: ISBN,
    titulo: titulo,
    editorial: editorial,
    clasificacion: clasificacion,
    periodicidad: periodicidad,
    fecha: fecha,
  };

  revistas.push(revista);

  despliegaRevistaEspecifica(revista);

  
}

function despliegaRevistaEspecifica(revista) {
  let clasificacion = revista.clasificacion;
  borraHijos("resultadosId");
  switch (clasificacion) {
    case "Noticias":
      titulo = "Revistas de Noticias";
      categorias = [];
      for (let index = 0; index < revistas.length; index++) {
        const element = revistas[index];

        if (element.clasificacion === clasificacion) {
          let elementToPush = {
            isbnRevista: element.ISBN,
            titulo: element.titulo,
            editorial: element.editorial,
            clasificacion: element.clasificacion,
            periodicidad: element.periodicidad,
            fecha: element.fecha,
          };

          categorias.push(elementToPush);
        }
      }
      break;
    case "Gaming":
      titulo = "Revistas de Gaming";
      categorias = [];
      for (let index = 0; index < revistas.length; index++) {
        const element = revistas[index];

        if (element.clasificacion === clasificacion) {
          let elementToPush = {
            isbnRevista: element.ISBN,
            titulo: element.titulo,
            editorial: element.editorial,
            clasificacion: element.clasificacion,
            periodicidad: element.periodicidad,
            fecha: element.fecha,
          };

          categorias.push(elementToPush);
        }
      }
      break;
    case "Deportes":
      titulo = "Revistas de Deportes";
      categorias = [];
      for (let index = 0; index < revistas.length; index++) {
        const element = revistas[index];

        if (element.clasificacion === clasificacion) {
          let elementToPush = {
            isbnRevista: element.ISBN,
            titulo: element.titulo,
            editorial: element.editorial,
            clasificacion: element.clasificacion,
            periodicidad: element.periodicidad,
            fecha: element.fecha,
          };

          categorias.push(elementToPush);
        }
      }
      break;
    case "Gossip":
      titulo = "Revistas de Gossip";
      categorias = [];
      for (let index = 0; index < revistas.length; index++) {
        const element = revistas[index];

        if (element.clasificacion === clasificacion) {
          let elementToPush = {
            isbnRevista: element.ISBN,
            titulo: element.titulo,
            editorial: element.editorial,
            clasificacion: element.clasificacion,
            periodicidad: element.periodicidad,
            fecha: element.fecha,
          };

          categorias.push(elementToPush);
        }
      }
      break;
  }

  let encabezados = [
    "ISBN",
    "Titulo",
    "Editorial",
    "Clasificación",
    "Periodicidad",
    "Fecha",
  ];
  despliegaTabla("resultadosId", titulo, encabezados, categorias);
}


function validaISBN(){
  let ISBN = document.getElementById("campoIsbnRevista").value;
  for (let index = 0; index < revistas.length; index++) {
    const element = revistas[index];
    
    if(element.ISBN === ISBN){
      
      return console.log("YA EXISTE COMPARE");
      
    }else if(index === revistas.length - 1){
      break;
    }
  } 
  capturaRevista();
  
}