
const seccApiKey = () => {

  const ApiKey = document.createElement('section');
  ApiKey.className = "apikey";
  
  ApiKey.innerHTML = `

  <div class="api-container">
  <img src="./assets/Logo.svg">
  <h1>Disfruta de  una conversación agradable con todas las mascotas de Monito o ten una linda charla y conoce más a tu mascota preferida. Ingresa tu API Key y descubre mucho más sobre ellos.</h1>
  <input type="password" placeholder="Agrega aquí tu contraseña"></i>
  <div class="botones"> 
    <button class="btn-limpiar">Limpiar</button>
    <button class="btn-guardar">Guardar</button>
  </div>
    <button class="btn-regresar">Ir a Inicio</button>
  </div>`;

  return ApiKey;
}

export default seccApiKey;
