import { deleteApiKey, getApiKey, setApiKey } from "../lib/apiKey.js";
import { navigateTo } from "../router.js";

const seccApiKey = () => {

  const contenedorApiKey = document.createElement('section');
  contenedorApiKey.className = "apikey";
  
  contenedorApiKey.innerHTML = `
  <i id="btn-cerrar" class="fa-solid fa-circle-xmark"></i>
  <div class="api-container">
  <img src="./assets/Logo.svg">
  <h1>Disfruta de  una conversación agradable con todas las mascotas de Monito o ten una linda charla y conoce más a tu mascota preferida. Ingresa tu API Key y descubre mucho más sobre ellos.</h1>
  <input class="input-api" type="password" placeholder="Ingresa aquí tu API Key"></i>
  <div class="botones"> 
    <button class="btn-limpiar">Limpiar</button>
    <button class="btn-guardar">Guardar</button>
  </div>
    <button class="btn-regresar">Ir a Inicio</button>
  </div>`;


  const inputApikey = contenedorApiKey.querySelector('.input-api');
  const btnGuardarApi = contenedorApiKey.querySelector('.btn-guardar');
  const btnLimpiarApi = contenedorApiKey.querySelector('.btn-limpiar');
 

  const staticApi = () => {
    const obtenerApi = getApiKey();
    if(obtenerApi) {
      inputApikey.value = obtenerApi;
    }
  }
  staticApi()

  // Botón Guardar API Key //

  btnGuardarApi.addEventListener('click', () => {
  
    // Guarda el valor en input //
    setApiKey(inputApikey.value)

    // Recupera lo guardado en setApiKey //
    const recuperarApiKey = getApiKey();

    if (recuperarApiKey) {
      inputApikey.value = `${recuperarApiKey}`;
    } else {
      alert('Clave incorrecta')
    }
  }
)  

// Botón Limpiar API Key //

btnLimpiarApi.addEventListener('click', () => {
  deleteApiKey();
  inputApikey.value = '';
})

// Botón volver a Home //

const btnRegresar = contenedorApiKey.querySelector(".btn-regresar");
        btnRegresar.addEventListener('click', () => {
          navigateTo ("/")
        } )     

// Botón cerrar y volver al Home //

  const btnCerrar = contenedorApiKey.querySelector("#btn-cerrar");
        btnCerrar.addEventListener('click', () => {
          navigateTo ("/")
        } )     

  return contenedorApiKey;
}

export default seccApiKey;
