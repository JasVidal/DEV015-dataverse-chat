let ROUTES = {};
let rootEl;

export const setRootEl = (el) => {
  rootEl = el;
  return rootEl
}

export const setRoutes = (routes) => {
  // optional Throw errors if routes isn't an object
  // optional Throw errors if routes doesn't define an /error route
  // assign ROUTES | !== -> desigualdad estricta / || -> y
  if (typeof routes !== "object" || routes === null) {
    throw new Error("Routes debe ser un objeto");
  }

  if (routes["/Error"]) {
    throw new Error("Routes debe definir una ruta /error");
  }

  return ROUTES = routes;
}

export const renderView = (pathname, props = {}) => {

  // clear the root element
  // find the correct view in ROUTES for the pathname
  // in case not found render the error view
  // render the correct view passing the value of props
  // add the view element to the DOM root element
  rootEl.innerHTML = '';

  if (ROUTES === pathname [props]) {
    rootEl.innerHTML = pathname["/Home"]
  };
  
  const verContenido = verFuncion(props);
  rootEl.innerHTML = verContenido;
};

export const onURLChange = (location) => {
  // parse the location for the pathname and search params
  // convert the search params to an object
  // render the view with the pathname and object

}

  const pathname = location.pathname;
  const buscarParamsObjeto = convParamsBusquedaemObjeto(location.search);

  renderView(pathname, buscarParamsObjeto);
}

export const queryStringToObject = (queryString) => {
  // convert query string to URLSearchParams
  // convert URLSearchParams to an object
  // return the object
  const parametros = new URLSearchParams(queryString);
  const objeto = {};
  parametros.forEach((value, key) => {
    objeto[key] = value;
  });
  return objeto;
}


export const navigateTo = (pathname, props={}) => {
  // update window history with pushState
  // render the view with the pathname and props
  window.history.pushState({}, ''. pathname);
  renderView(pathname, props);
}
