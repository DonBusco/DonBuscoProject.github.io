// Una lista de elementos de ejemplo (puedes cambiar esto según tus necesidades)
const elementos = [
  "Casa de la libertad",
  "Mirador de Recoleta",
  "Parque Cretácico",
  "Castillo de la Glorieta",
  "01",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7 Amarilla",
  "7 Roja",
  "8",
  "10",
  "11",
  "12 Amarilla",
  "12 Rosado",
  "14",
  "25",
  "33",
  "A",
  "B Amarilla",
  "B Verde",
  "C",
  "D",
  "Fx",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "Q amarilla",
  "Q rosada",
];

//Lista de líneas de micros y sus respectivos enlaces o links
const enlaces = [
["Casa de la libertad","/pages/casa-de-la-libertad.html"],
["Mirador de Recoleta","/pages/mirador-de-recoleta.html"],
["Parque Cretácico","/pages/parque-cretacico.html"],
["Castillo de la Glorieta","/pages/castillo-de-la-glorieta.html"],
["01","/micro/linea-01-san-cristobal.html"],
["2","/micro/linea-02-san-cristobal.html"],
["3","/micro/linea-03-san-cristobal.html"],
["4","/micro/linea-04-san-cristobal.html"],
["5","/micro/linea-05-san-cristobal.html"],
["6","/micro/linea-06-san-cristobal.html"],
["7 Amarilla","/micro/linea-07-amarilla-san-cristobal.html"],
["7 Roja","/micro/linea-07-roja-san-cristobal.html"],
["8","/micro/linea-08-san-cristobal.html"],
["10","/micro/linea-10-san-cristobal.html"],
["11","/micro/linea-11-san-cristobal.html"],
["12 Amarilla","/micro/linea-12-amarilla-san-cristobal.html"],
["12 Rosado","/micro/linea-12-rosado-san-cristobal.html"],
["14","/micro/linea-14-san-cristobal.html"],
["25","/micro/linea-25-san-cristobal.html"],
["33","/micro/linea-33-san-cristobal.html"],
["A","/micro/linea-a-sindicato-sucre.html"],
["B Amarilla","/micro/linea-b-amarilla-sindicato-sucre.html"],
["B Verde","/micro/linea-b-verde-sindicato-sucre.html"],
["C","/micro/linea-c-sindicato-sucre.html"],
["D","/micro/linea-d-sindicato-sucre.html"],
["Fx","/micro/linea-fx-sindicato-sucre.html"],
["G","/micro/linea-g-sucre.html"],
["H","/micro/linea-h-sindicato-sucre.html"],
["I","/micro/linea-i-sindicato-sucre.html"],
["J","/micro/linea-j-sindicato-sucre.html"],
["K","/micro/linea-k-sindicato-sucre.html"],
["L","/micro/linea-l-sindicato-sucre.html"],
["Q amarilla","/micro/linea-q-amarilla-sindicato-sucre.html"],
["Q rosada","/micro/linea-q-rosada-sindicato-sucre.html"]
];
	
const searchInput = document.getElementById("searchInput");
const searchResults = document.getElementById("search-results");

// Función para realizar la búsqueda y mostrar resultados
function buscar() {
  const searchTerm = searchInput.value.toLowerCase();
  const resultados = [];

  // Itera a través de los elementos y agrega coincidencias a la lista de resultados
  for (let i = 0; i < elementos.length; i++) {
      const elemento = elementos[i].toLowerCase();
      if (elemento.includes(searchTerm)) {
          resultados.push(elementos[i]);
      }
  }

	limpiarResultados();
	
  // Muestra los resultados en una lista
  for (let i = 0; i < resultados.length; i++) {
      const listItem = document.createElement("li");
      listItem.textContent = resultados[i];
	  listItem.setAttribute("class","linea")
      searchResults.appendChild(listItem);
  }

  // Muestra los resultados si hay coincidencias o los oculta si no las hay
  if (resultados.length > 0) {
      searchResults.style.display = "block";
  } else {
      searchResults.style.display = "none";
  }
}

// Agrega un evento de escucha al campo de búsqueda
searchInput.addEventListener("input", buscar);

//Agrega un evento de escucha para seleccionar del resultado de la búsqueda 
searchResults.addEventListener("click", function (event) {
	let pathName = window.location.pathname;
	let urlCompleta=directorioActual(pathName) + buscarMicro(event.target.innerText);
	
	redireccionarMicro(urlCompleta);
	
	limpiarResultados();
	urlCompleta="";
	pathName="";
});

//Busca el número de línea del micro
function buscarMicro(linea) {
	let inicio=0;
	let lineaMicro="";
	do{
		lineaMicro=enlaces[inicio][1];
		inicio = inicio + 1;
	} 
	while(linea!=enlaces[inicio-1][0])
		return lineaMicro;
}

//Redirecciona a la pagina de rutas del micro
function redireccionarMicro(lineaMicro) {  
    window.location.href = lineaMicro;
}

 // Limpia los resultados de busqueda anteriores
function limpiarResultados() {  
    searchResults.innerHTML = '';
}

//Ubicacíon actual o directorio
function directorioActual(url){
	let directorio="";
	
	//directorio principal
	if (url.indexOf("pagina")!==-1){
		directorio=".";
	}
	
	//directorio pages
	if (url.indexOf("pages")!==-1){
		directorio="../.";
	}
	
	//directorio micro
	if (url.indexOf("micro")!==-1){
		directorio="..";
	}
	
	return directorio;
}
