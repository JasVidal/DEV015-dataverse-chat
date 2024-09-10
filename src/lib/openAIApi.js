// Importa la función para obtener la API KEY desde apiKey.js
import { getApiKey } from './apiKey.js';


function communicateWithOpenAI (messages) {
   //Aquí es donde debes implementar la petición con fetch o axios


return fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + getApiKey()
    },
    body: JSON.stringify({
        model: 'gpt-4o',
        messages: [
      {
        'role': 'user',
        'content': messages
      }
    ],
        temperature: 0.9
  
    })
})

.then(promiseOpenAI => {return promiseOpenAI.json()})
.catch(error => {('Error de API Key:', error)});

};

export default communicateWithOpenAI;