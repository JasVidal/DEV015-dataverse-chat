let ROUTES = {};
let rootEl;

export const setRootEl = (el) => {
  rootEl = el;
  return rootEl
}

export const setRoutes = (routes) => {
  // Opcional: arroja errores si las rutas no son un objeto
  // Opcional: arrojar errores si las rutas no definen una ruta /error
  // asignar RUTAS | !== -> desigualdad estricta / || -> o
  if (typeof routes !== "object" || routes === null) {
    throw new Error("Routes debe ser un objeto");
  }

  if (routes["/Error"]) {
    throw new Error("Routes debe definir una ruta /error");
  }

  return ROUTES = routes;
}

const renderView = (pathname, props = {}) => {

  // limpia el elemento root
  // busque la vista correcta en RUTAS para la ruta pathname
  // en caso de no encontrarlo renderiza la vista de error
  // renderiza la vista correcta pasando el valor de las propiedades
  // agrega el elemento de vista al elemento root del DOM
  root.innerHTML = '';

  if (ROUTES[pathname]) {
    root.replaceChildren(ROUTES[pathname](props));
  }
    else {
      root.replaceChildren(ROUTES["/Error"]());
    }
};

export const onURLChange = (location) => {
  // analiza la ubicación de la ruta y los parámetros de búsqueda
  // convierte los parámetros de búsqueda en un objeto
  // renderiza la vista con la ruta y el objeto

  const { pathname, search } = location;
  console.log("🚀 ~ onURLChange ~ pathname:", pathname)
  const props = queryStringToObject(search);
  console.log("🚀 ~ onURLChange ~ props:", props)
  renderView(pathname, props);

  console.log(document.getElementById('root-2'));

}


  const queryStringToObject = (queryString) => {
    const url =new URLSearchParams(queryString)

    // url.has('nombre')
    //url.get('nombre')

    return {nombre: url.get('nombre')}


  // convert query string to URLSearchParams
  // convert URLSearchParams to an object
  // return the object
}

export const navigateTo = (pathname, props={}) => {
  // update window history with pushState
  // render the view with the pathname and props
  window.history.pushState({}, ''. pathname);
  renderView(pathname, props);
}
