// Importa la función para obtener la API KEY desde apiKey.js
import { getApiKey } from './apiKey.js';


async function communicateWithOpenAI (messages) {
   //Aquí es donde debes implementar la petición con fetch o axios


const asincrona = await fetch('https://api.openai.com/v1/chat/completions', {
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
return await asincrona.json()


};

export default communicateWithOpenAI;