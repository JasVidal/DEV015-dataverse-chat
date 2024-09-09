// En este archivo definirás tus rutas e importarás los componentes que vas a renderizar.
import  Home from './views/Home.js';
import  Error from './views/Error.js';
import  ApiKeypage from './views/APIKey.js';
import  verMas from './views/VerMas.js';
import  chatIndividual from './views/ChatIndividual.js';
/*import  ChatGrupal from './views/ChatGrupal.js';*/



// ... import other views
import { setRootEl, setRoutes, onURLChange } from './router.js';

// Define your routes and their associated views
const routes = {
  '/': Home,
  '/error': Error,
  '/apikey': ApiKeypage,
  '/vermas':verMas,
  '/chatindividual': chatIndividual,
  /*'/chatgrupal': ChatGrupal, */
};

// Assign the routes
setRoutes(routes);

const rootEl = document.querySelector('#root');

// Set the root element where views will be rendered

window.addEventListener("DOMContentLoaded", () => {
  setRootEl(rootEl);
  onURLChange(window.location)
});

window.addEventListener('popstate', (props) => {
  onURLChange(location, props.state)
});
