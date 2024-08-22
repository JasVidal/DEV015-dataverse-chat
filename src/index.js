// En este archivo definirás tus rutas e importarás los componentes que vas a renderizar.
import seccNavbar from './views/Navbar.js';
import seccBanner from './views/Banner.js';
import seccTarjetas from './views/Tarjetas.js';
import seccNosotros from './views/Nosotros.js';
import seccRegistrate from './views/Registrate.js';
import seccVisitanos from './views/Visitanos.js';
import seccDonaciones from './views/Donaciones.js';
import seccFooter from './views/Footer.js';


// ... import other views
import { setRootEl, setRoutes /*onURLChange*/ } from './router.js';

// Define your routes and their associated views
const routes = {
  '/': seccNavbar,
  '/': seccBanner,
  '/': seccTarjetas,
  '/': seccNosotros,
  '/': seccRegistrate,
  '/': seccVisitanos,
  '/': seccDonaciones,
  '/': seccFooter,
};

// Assign the routes
setRoutes(routes);

// Set the root element where views will be rendered

window.addEventListener("DOMContentLoaded", () => {
  document.getElementById('root').appendChild(seccNavbar());
  setRootEl(document.querySelector('#root'));
});

window.addEventListener("DOMContentLoaded", () => {
  document.getElementById('root').appendChild(seccBanner());
  setRootEl(document.querySelector('#root'));
});

window.addEventListener("DOMContentLoaded", () => {
  document.getElementById('root').appendChild(seccTarjetas());
  setRootEl(document.querySelector('#root'));
  /*onURLChange(window.location);*/
});

window.addEventListener("DOMContentLoaded", () => {
  document.getElementById('root').appendChild(seccNosotros());
  setRootEl(document.querySelector('#root'));
});

window.addEventListener("DOMContentLoaded", () => {
  document.getElementById('root').appendChild(seccRegistrate());
  setRootEl(document.querySelector('#root'));
});

window.addEventListener("DOMContentLoaded", () => {
  document.getElementById('root').appendChild(seccVisitanos());
  setRootEl(document.querySelector('#root'));
});

window.addEventListener("DOMContentLoaded", () => {
  document.getElementById('root').appendChild(seccDonaciones());
  setRootEl(document.querySelector('#root'));
});

window.addEventListener("DOMContentLoaded", () => {
  document.getElementById('root').appendChild(seccFooter());
  setRootEl(document.querySelector('#root'));
});

/*
// Set the root element where views will be rendered
window.addEventListener("DOMContentLoaded", () => {
  setRootEl(/* root element );
}); */

/*
TODO:
1.- Definir rutas en router.
2.- Pasar "root element" a router.
3.- Invocar el router para renderizar la vista correcta.
*/