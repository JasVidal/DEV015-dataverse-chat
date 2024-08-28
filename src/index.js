// En este archivo definirás tus rutas e importarás los componentes que vas a renderizar.
import  Home from './views/Home.js';
import  Error from './views/Error.js';
import  verMas from './views/VerMas.js';

// ... import other views
import { setRootEl, setRoutes, onURLChange } from './router.js';

// Define your routes and their associated views
const routes = {
  '/': Home,
  '/error': Error,
  '/vermas': verMas,
};

// Assign the routes
setRoutes(routes);

const rootEl = document.querySelector('#root');

// Set the root element where views will be rendered

window.addEventListener("DOMContentLoaded", () => {
  setRootEl(rootEl);
  onURLChange(window.location)
});

/*
TODO:
1.- Definir rutas en router.
2.- Pasar "root element" a router.
3.- Invocar el router para renderizar la vista correcta.
*/