/* import Api from '../components/apikey.js';
 */
const pageApiKey = () => {

    const ApiKey = document.createElement('section');
  ApiKey.className = "pageApi";
  ApiKey.innerHTML = `

  <div>
  <p>Hola</p><i type="password" placeholder="Agrega aquí tu contraseña></i>
</div>
`
 /*  pageApiKey.appendChild(Api());

  const apikey = document.createElement('section');
    apikey.textContent = 'hola';
   */
  return ApiKey;
}

export default pageApiKey;
