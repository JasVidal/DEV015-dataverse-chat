// En este archivo definirás tus rutas e importarás los componentes que vas a renderizar.

import seccTarjetas from './views/Tarjetas.js';
// ... import other views
import { setRootEl, setRoutes /*onURLChange*/ } from './router.js';

// Define your routes and their associated views
const routes = {
  '/': seccTarjetas
  // ...
};

// Assign the routes
setRoutes(routes);

// Set the root element where views will be rendered
window.addEventListener("DOMContentLoaded", () => {
  console.log(seccTarjetas())
  document.getElementById('root').appendChild(seccTarjetas());
  setRootEl(document.querySelector('#root'));
  /*onURLChange(window.location);*/
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