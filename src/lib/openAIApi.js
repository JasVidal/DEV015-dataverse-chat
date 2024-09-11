// Importa la función para obtener la API KEY desde apiKey.js
import { getApiKey } from './apiKey.js';

export const communicateWithOpenAI = (messages, pet) => {

   //Aquí es donde se debe implementar la petición con fetch o axios


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
        'role': 'system', 'content': `Tu nombre es ${pet.name}. Tu personalidad es ${pet.description}. Responderás simulando ser la mascota asignada. La conversación debe ser fluida y natural. Siempre ten en cuenta tu nombre y personalidad para cada respuesta, incluye emojis. Tus respuestas serán cortas de no más de 30 palabras.`
      },
      {
        "role": 'user',
        "content": messages
      },
    ],
        temperature: 0.9
    }),
})

.then(promiseOpenAI => {return promiseOpenAI.json()})
.catch(error => {('Error de API Key:', error)})
}