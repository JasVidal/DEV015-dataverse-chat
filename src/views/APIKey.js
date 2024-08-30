import Api from '../components/apikey.js';

const pageApiKey = () => {

    const ApiKey = document.createElement('section');
  ApiKey.className = "pageApi";
  ApiKey.id = "page-container";

  pageApiKey.appendChild(Api());


  return ApiKey;
}

export default pageApiKey;
