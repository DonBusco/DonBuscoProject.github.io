const turismoLista = document.getElementById("turismo-lista");
const turismoInfo = document.getElementById("turismo-info");

// turismoLista.addEventListener("click", mostrarInformacionTurismo);

function mostrarInformacionTurismo(event) {
  const turismoSeleccionada = event.target.dataset.turismo;
  if (turismoSeleccionada) {
    const informacionTurismo = obtenerInformacionTurismo(turismoSeleccionada);
    //mostrarTurismo(informacionTurismo);
    redireccionar(informacionTurismo);
  }
}
document.getElementById("donbosco").addEventListener("click", function() {
  window.location.href = "../index.html" });



function obtenerInformacionTurismo(turismo) {
  // Aquí podrías implementar una lógica para obtener la información de la ruta seleccionada,
  // por ejemplo, consultando una base de datos o un servicio web.
  // Por simplicidad, utilizaremos datos estáticos en este ejemplo.

  const turismos = {
    "turismo-1": {
      nombre: "casaDeLaLibertad",
      page:'casa-de-la-libertad.html',
      descripcion: "Otro de los lugares importantes que no puedes dejar de visitar durante tu próxima visita a Sucre es la Casa de la Libertad, un edificio colonial religioso y universitario de la orden de los jesuitas donde germinó la idea de la Independencia."
    },
    "turismo-2": {
      nombre: "Mirador de Recoleta",
      page:'casa-de-la-libertad.html',
      descripcion: "Hablando de vistas, otro de los lugares imprescindibles que visitar en Sucre es su mirador de Recoleta, ubicado en la parte sur de la ciudad. Llegaréis a él caminando apenas 15 minutos desde la Plaza 25 de mayo pero eso sí, estad preparados para subiiiir.",
    },
    "turismo-3": {
      nombre: "Parque Cretácico",
      descripcion: "¡Dinosauuuurios! Pablo, aquí a las teclas, es un fan aférrimo de Jurassic Park, y por eso quiso visitar el Parque Cretácico de Sucre. Dicen que tiene la mayor cantidad de huellas de dinosaurios del mundo! No se si creérmelo, después de un año en Bolivia estoy ya curado de espanto, sobre todo hablando de que algo es “el más x” o “lo más y”. Se ve que el marketing pegó fuerte."
    },
    "turismo-4": {
      nombre: "Castillo de la Glorieta",
      page:'casa-de-la-libertad.html',
      descripcion: "“En medio del silencio abrumador escuchamos cadenas que se arrastraban y se acercaban hacia el puesto de guardia numero 4, lugar donde mi camarada y yo estábamos de turno. No pudimos reaccionar, estábamos perplejos escuchando como aquel sonido se acercaba más y más. Sentimos que algo suave y muy ligero pasó sobre nuestros cuerpos… y dejaron de sonar las cadenas”, relata Moisés Céspedes, ex cadete del Liceo Militar Teniente Edmundo Andrade edificado en la propiedad del espectacular Castillo La Glorieta de Sucre.",
    },
  };

  return turismos[turismo];
}

function redireccionar(turismo) {  
  document.getElementById(""+turismo.nombre).addEventListener("click", function() {
    window.location.href = "pages/"+turismo.page; });
  // const contenido = `
  //   <h2>${turismo.nombre}</h2>
  //   <p>${turismo.descripcion}</p>
  // `;
  // turismoInfo.innerHTML = contenido;
}
function mostrarTurismo(turismo) {
  const contenido = `
    <h2>${turismo.nombre}</h2>
    <p>${turismo.descripcion}</p>
  `;
  turismoInfo.innerHTML = contenido;
}


