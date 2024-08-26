// En este archivo definirás tus rutas e importarás los componentes que vas a renderizar.
import  Welcome from './views/Home.js';
import  Error from './views/Error.js';
import  ChatIndividual from './views/ChatIndividual.js';

// ... import other views
import { setRootEl, setRoutes /*onURLChange*/ } from './router.js';

// Define your routes and their associated views
const routes = {
  '/': Welcome,
  '/error': Error,
  '/chatindividual': ChatIndividual,
};

// Assign the routes
setRoutes(routes);

// Set the root element where views will be rendered

window.addEventListener("DOMContentLoaded", () => {
  document.getElementById('root').appendChild(Welcome());
  setRootEl(document.querySelector('#root'));
  /*onURLChange(window.location);*/
});

/*
TODO:
1.- Definir rutas en router.
2.- Pasar "root element" a router.
3.- Invocar el router para renderizar la vista correcta.
*/