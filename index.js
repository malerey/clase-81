// offset  

// cuantos elementos tengo que saltearme antes de empezar a dar los resultados


let paginaActual = 0
let resultadosPorPagina = 20 

const primeraPagina = document.querySelector(".first-page")
const ultimaPagina = document.querySelector(".last-page")
const proximaPagina = document.querySelector(".next-page")
const anteriorPagina = document.querySelector(".previous-page")

console.log("botones:", primeraPagina, ultimaPagina, proximaPagina, anteriorPagina)

const buscarComics = () => {

  // if (paginaActual == 0) {
  //   primeraPagina.classList.add("deshabilitar")
  //   anteriorPagina.classList.add("deshabilitar")
  // }

  // if (offset + resultadosPorPagina > total) {
  //   proximaPagina.classList.add("deshabilitar")
  //   ultimaPagina.classList.add("deshabilitar")
  // }
  console.log('paginaActual', paginaActual)
  fetch(`https://gateway.marvel.com/v1/public/comics?apikey=89af8964112ea3350775c024cda415b8&offset=${paginaActual * resultadosPorPagina}`)
  .then( res => res.json())
  .then(data => {
    console.log('data', data)
    console.log('offset:', data.data.offset)
  })
}

proximaPagina.onclick = () => {
  paginaActual++
  buscarComics()
}

anteriorPagina.onclick = () => {
  paginaActual--
  buscarComics()
}

primeraPagina.onclick = () => {
  paginaActual = 0
  buscarComics()
}

ultimaPagina.onclick = () => {
  
  const resto = total % resultadosPorPagina
  if (resto > 0) {
    paginaActual = (total - (total % resultadosPorPagina)) / resultadosPorPagina
  }
  else {
    paginaActual = ((total - (total % resultadosPorPagina)) / resultadosPorPagina) - resultadosPorPagina
  }
  
  buscarComics()
}

buscarComics()
