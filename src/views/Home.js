import dataFunctions from '../lib/dataFunctions.js';
import petsData from '../data/dataset.js';
import { renderItems } from '../components/tarjetaContenido.js';
import seccNavbar from '../components/navbar.js';
import seccBanner from '../components/banner.js';
import seccTarjetas from '../components/Tarjetas.js';
import seccNosotros from '../components/nosotros.js';
import seccRegistrate from '../components/registrate.js';
import seccVisitanos from '../components/visitanos.js';
import seccDonaciones from '../components/donaciones.js';
import seccFooter from '../components/footer.js';

const { showPets, filterDataByType, filterDataByAge, filterDataByValue, orderPetsBy, countAdoptedPets } = dataFunctions;

const Home = () => {

//------------------ Agregando Vista de elementos ------------------//


  const homeContainer = document.createElement('section');
  homeContainer.className = "home";
  homeContainer.id = "home-container";
  
  const bannerSection = seccBanner();
  const tarjetasSection = seccTarjetas();

  homeContainer.appendChild(seccNavbar());
  homeContainer.appendChild(seccBanner());
  homeContainer.appendChild(tarjetasSection);
  homeContainer.appendChild(seccNosotros());  
  homeContainer.appendChild(seccRegistrate());
  homeContainer.appendChild(seccVisitanos());
  homeContainer.appendChild(seccDonaciones());
  homeContainer.appendChild(seccFooter());



//------------------ Agregando Funciones ------------------//

 //------------------ Botones principales ------------------//

/*Botón para abrir y cerrar Sidebar */

const root = document.getElementById('root')

 window.onload=function(){
  const menuBtn = seccNavbar.querySelector('.menu-btn')
  const btnCloseIcon = seccNavbar.querySelector('.btn-close i')
  const dropDownMenu = seccNavbar.querySelector('.sidebar')

  menuBtn.onclick = function(){
    dropDownMenu.classList.toggle('active')
  }

  btnCloseIcon.onclick = function(){
    dropDownMenu.classList.remove('active')
  }
  
}


// Botón Conócelos //

const btnConocelos = bannerSection.querySelector('#conocelos-btn')

btnConocelos.addEventListener('click', () => {
  tarjetasSection.scrollIntoView({
    behavior: 'smooth'
  });
});


// Botón aparecer Filtros //

tarjetasSection.querySelector('.boton-filtros').addEventListener('click', function () {
  const botones = tarjetasSection.querySelector('.mascotas-filtros');
  if (botones.style.display === 'none') {
    botones.style.display = 'block';
  }
  else {
    botones.style.display = 'none';
  }
});

tarjetasSection.addEventListener('load', () => {
  const pets = showPets();
  root.appendChild( renderItems(pets));
  console.log(document.getElementById('root-2'));

})


//------------ Sección tarjetas - Funciones de Filtrado y Botón Limpiar ------------//

// Estado de los filtros
const filtros = {
  tipo: null,
  edad: null,
  genero: null,
  tamaño: null
};

function aplicarFiltros(datos) {
  let resultados = datos;

  // Filtro por tipo
  if (filtros.tipo) {
    resultados = filterDataByType(resultados, 'type', filtros.tipo.toLowerCase());
  }

  // Filtro por edad
  if (filtros.edad) {
    const ageRanges = {
      'Cachorro': [0, 12],
      'Adulto': [13, 119],
      'Mayor': [120, 240]
    };

    const [minAge, maxAge] = ageRanges[filtros.edad];
    resultados = filterDataByAge(resultados, 'age', minAge, maxAge);
  }

  // Filtro por género
  if (filtros.genero) {
    resultados = filterDataByValue(resultados, 'gender', filtros.genero);
  }

  // Filtro por tamaño
  if (filtros.tamaño) {
    resultados = filterDataByValue(resultados, 'size', filtros.tamaño);
  }

  return resultados;
}

// Aplicar filtros y actualizar la vista
function actualizarVista() {
  root.innerHTML = '';
  const resultadosFiltrados = aplicarFiltros(petsData);
  root.appendChild(renderItems(resultadosFiltrados));
}

// Filtro Tipo //

const selectTipo = homeContainer.querySelector('#tipo');

selectTipo.addEventListener('change', (event) => {
  filtros.tipo = event.target.value;
  actualizarVista();
});


// Filtro Edad //

const selectAge = tarjetasSection.querySelector('#edad');
selectAge.addEventListener("change", () => {
  filtros.edad = selectAge.value;
  actualizarVista();
})

// Filtro Género //

const selectGenero = tarjetasSection.querySelector('#genero');

selectGenero.addEventListener('change', (event) => {
  filtros.genero = event.target.value;
  actualizarVista();
});


//Filtro Tamaño //

const selectTamaño = tarjetasSection.querySelector('#tamaño');
selectTamaño.addEventListener('change', (event) => {
  filtros.tamaño = event.target.value;
  actualizarVista();
});


// Botón Limpiar //

const botonLimpiar = tarjetasSection.querySelector('#btn-limpiar');
botonLimpiar.addEventListener('click', () => {
  const pets = showPets();
  root.innerHTML = "";

  // Restablecer el estado de los filtros
  filtros.tipo = null;
  filtros.edad = null;
  filtros.genero = null;
  filtros.tamaño = null;

  //Restablecer los selects
  selectTipo.value = "Tipo";
  selectGenero.value = "Genero";
  selectAge.value = "Edad";
  selectTamaño.value = "Tamaño";

  //Limpiar los radio buttons
  botonOrdenarAsc.checked = false;
  botonOrdenarDesc.checked = false;

  root.appendChild(renderItems(pets));
});


// Filtro Ordenar Alfabéticamente //

const botonOrdenarAsc = tarjetasSection.querySelector('#asc');
botonOrdenarAsc.addEventListener("click", function(){
  document.getElementById('root-2').innerHTML = "";
  const resultadosFiltrados = aplicarFiltros(petsData);
  const valorElegido = botonOrdenarAsc.value;
  const ordenarPetsData = orderPetsBy(resultadosFiltrados,'name',valorElegido);
  document.getElementById('root-2').appendChild(renderItems(ordenarPetsData))
})

const botonOrdenarDesc= tarjetasSection.querySelector('#desc');
botonOrdenarDesc.addEventListener("click", function(){
  document.getElementById('root-2').innerHTML = "";
  const resultadosFiltrados = aplicarFiltros(petsData);
  const valorElegido = botonOrdenarDesc.value;
  const ordenarPetsData = orderPetsBy(resultadosFiltrados, 'name', valorElegido);
  document.getElementById('root-2').appendChild(renderItems(ordenarPetsData))
})

// Botón Estadísticas //

const btnStats = tarjetasSection.querySelector('#btn-estadísticas');
const sectionStats = tarjetasSection.querySelector('.estadisticas-section');
const btncloseStats = tarjetasSection.querySelector('.btn-close2 li i');
const adoptedPets = tarjetasSection.querySelector('.adoptados');

btnStats.addEventListener('click', () => {
  sectionStats.style.display = 'block';
  const adoptedResult = countAdoptedPets(petsData)
  adoptedPets.innerHTML = `Número de mascotas adoptadas: ${adoptedResult}`;  
   
});

btncloseStats.addEventListener('click', () => {
  sectionStats.style.display = 'none';
});


return homeContainer; 

}



export default Home;