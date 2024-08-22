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

 /* if (!("/error" in routes)) {
    throw new Error("Routes debe definir una ruta /error");
  }*/

  return ROUTES = routes
}
/*
const renderView = (pathname, props = {}) => {
  // clear the root element
  root.innerHTML = '';
  // find the correct view in ROUTES for the pathname
  // in case not found render the error view
  if ( pathname )
  // render the correct view passing the value of props
  // add the view element to the DOM root element
};

export const onURLChange = (location) => {
  // parse the location for the pathname and search params
  // convert the search params to an object
  // render the view with the pathname and object
  location
}

const queryStringToObject = (queryString) => {
  // convert query string to URLSearchParams
  // convert URLSearchParams to an object
  // return the object
}



export const navigateTo = (pathname, props={}) => {
  // update window history with pushState
  // render the view with the pathname and props
}*/
