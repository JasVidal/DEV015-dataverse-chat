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

                <article class ="mensaje-pet">
                <img id="icono-pet" class="chatIndividual-img" src="${pet.imageUrl}">
                <p class="mensaje_text_pet"> ¡Hola! Mi nombre es ${pet.name} y estoy feliz de conocerte (:</p>
                </article>

                <article class ="mensaje-usuario">
                <p class="mensaje_text_usuario">...</p>
                <i id="icono-usuario" class="fa-solid fa-user fa-md"></i>
                </article>

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

    const iconoUsuario = chatIndividual.querySelector('#icono-usuario');
    const txtUsuario = chatIndividual.querySelector('.message_text_usuario'); 
    const iconoPet = chatIndividual.querySelector('#icono-pet');
    const txtPet = chatIndividual.querySelector('.message_text_pet');

   
/*     document.addEventListener('DOMContentLoaded', () => {
    iconoUsuario.style.display = 'none';
    txtUsuario.style.display = 'none';
    iconoPet.style.display = 'none';
    txtPet.style.display = 'none'; }) */

    // Botón cerrar y volver al Home //

    const btnCerrar = chatIndividual.querySelector("#btn-cerrar");
    btnCerrar.addEventListener('click', () => {
        navigateTo ("/")
    } )     

     // Botón enviar //

    chatBtn.addEventListener('click', () => {
        const txtInput = chatInput.value.trim();
       
/*         iconoUsuario.style.display = 'block';
        txtUsuario.style.display = 'block'; */

    // Generar la respuesta de Pet //

        if (chatInput !== "") {
            communicateWithOpenAI(txtInput)
            .then(respuesta => {
                const textoPet = respuesta.choices[0].message.content;
                chatInput.value = " ";
/*                 iconoPet.style.display = 'block';
                txtPet.style.display = 'block'; */
                ejemplo(textoPet, 'pet')
            }).catch();
        }
        ejemplo(txtInput, 'usuario')
    })


    function ejemplo(text, sender) {
        const conversacion = chatIndividual.querySelector('.conversacion');
        const cloneHTML = conversacion.cloneNode(true);

        if (sender === "usuario") {
            
            const nuevoMensajeUsuario = cloneHTML.querySelector(".mensaje-usuario")
            const iconoUsuario = nuevoMensajeUsuario.querySelector('#icono-usuario');
            const mensajeUsuario = nuevoMensajeUsuario.querySelector('.mensaje_text_usuario');
            
            mensajeUsuario.textContent = text;

            conversacion.appendChild(nuevoMensajeUsuario);

        } else {
            
            const nuevoMensajePet = cloneHTML.querySelector(".mensaje-pet");
            const iconoPet = nuevoMensajePet.querySelector('#icono-pet');
            const mensajePet = nuevoMensajePet.querySelector('.mensaje_text_pet');

            iconoPet.textContent = sender;
            mensajePet.textContent = text;

            conversacion.appendChild(nuevoMensajePet);

        }

};
    return chatIndividual;
}   
    export default pageChatIndividual;