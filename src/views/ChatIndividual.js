import petsData from '../data/dataset.js';
import {  communicateWithOpenAI } from '../lib/openAIApi.js';
import { navigateTo } from '../router.js';

const pageChatIndividual = (props) => {
  
const pet = petsData.find(item => item.id === props.id);
    
  const chatIndividual = document.createElement('section');
  chatIndividual.className = "chat-individual";

  chatIndividual.innerHTML = 

  
 `      
    <i id="btn-cerrar" class="fa-solid fa-circle-xmark"></i>
        <div class="chat-container">          
            <header class="headerchat-arriba">
                    <div itemprop="chatIndividual-img">
                     <img class="chatIndividual-img" src="${pet.imageUrl}"></div>
                    <div id="div-name" itemprop="name">${pet.name}</div>
                    <i class="fa-solid fa-ellipsis-vertical fa-comment fa-md"></i>
            </header>

                <div class="conversacion">
                
                </div>    

                    <div id="texto">
                    <input class="chat-input" name="user-msg" type="text" id="user-msg" placeholder="Escribe aquí tu pregunta...">
                    <button class="btnchatindividual-enviar">
                    <i class="fa-solid fa-paper-plane fa-md"></i></button>
                    </div>

            </div>
        </div>
        </section>
    ` 
    const chatInput = chatIndividual.querySelector('.chat-input');
    const chatBtn = chatIndividual.querySelector('.btnchatindividual-enviar');

    // Botón cerrar y volver al Home //

    const btnCerrar = chatIndividual.querySelector("#btn-cerrar");
    btnCerrar.addEventListener('click', () => {
        navigateTo ("/")
    } )     

     // Botón enviar //

    chatBtn.addEventListener('click', () => {
        const txtInput = chatInput.value.trim();

    // Generar la respuesta de Pet //

        if (chatInput !== "") {
            communicateWithOpenAI(txtInput, pet)
            .then(respuesta => {
                const textoPet = respuesta.choices[0].message.content;
                chatInput.value = " ";
                ejemplo(textoPet, 'pet')
            }).catch();
        }
        ejemplo(txtInput, 'usuario')
    })


    function ejemplo(text, sender) {
        const conversacion = chatIndividual.querySelector('.conversacion');
        const cloneHTML = conversacion.cloneNode(true);

        if (sender === "usuario") {

            const nuevoMensajeUsuario = document.createElement('article');
            nuevoMensajeUsuario.className = 'mensaje-usuario';
            nuevoMensajeUsuario.innerHTML = `
                <p class="mensaje_text_usuario">${text}</p>
                <i id="icono-usuario" class="fa-solid fa-user fa-md"></i>
            `;

            conversacion.appendChild(nuevoMensajeUsuario); 

        } else {
            
            const nuevoMensajePet = document.createElement('article');
            nuevoMensajePet.className = 'mensaje-pet';
            nuevoMensajePet.innerHTML = `
                <img id="icono-pet" class="chatIndividual-img" src="${pet.imageUrl}">
                <p class="mensaje_text_pet">${text}</p>
            `;

            conversacion.appendChild(nuevoMensajePet);

        }

};
    return chatIndividual;
}   
    export default pageChatIndividual;