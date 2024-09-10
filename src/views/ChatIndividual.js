import petsData from '../data/dataset.js';
import communicateWithOpenAI from '../lib/openAIApi.js';

const pageChatIndividual = (props) => {
  
const pet = petsData.find(item => item.id === props.id);
    
  const chatIndividual = document.createElement('section');
  chatIndividual.className = "chat-individual";

  chatIndividual.innerHTML = 

  
 `      
    <i class="fa-solid fa-circle-xmark"></i>
        <div class="chat-container">          
            <header class="headerchat-arriba">
                    <div itemprop="chatIndividual-img">
                     <img class="chatIndividual-img" src="${pet.imageUrl}"></div>
                    <div id="div-name" itemprop="name">${pet.name}</div>
                    <i class="fa-solid fa-ellipsis-vertical fa-comment fa-md"></i>
            </header>

                <div class="conversacion">
                <article class ="mensaje-usuario">
                <p class="mensaje_text_usuario"></p>
                <i id="icono-usuario" class="fa-solid fa-user fa-md"></i>
                </article>

                <article class ="mensaje-pet">
                <img id="icono-pet" class="chatIndividual-img" src="${pet.imageUrl}">
                <p class="mensaje_text_pet"></p>
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

    chatBtn.addEventListener('click', () => {
        const txtInput = chatInput.value.trim();


// Generar la respuesta de Pet //

        if (chatInput !== "") {
            communicateWithOpenAI(txtInput)
            .then(respuesta => {
                const textoPet = respuesta.choices[0].message.content;
                chatInput.value = " ";
                ejemplo(textoPet, "pet")
            }).catch();
        }
        ejemplo(txtInput, '')
    })

       const conversacion = chatIndividual.querySelector('.conversacion')

    function ejemplo(text, sender) {
        const cloneHTML = conversacion.cloneNode(true);

        if (sender === "user") {
            
            const nuevoMensajeUsuario = conversacion.querySelector(".mensaje-usuario")
            const iconoUsuario = chatIndividual.querySelector('#icono-usuario');
            const mensajeUsuario = chatIndividual.querySelector('.mensaje_text_usuario');
            
            iconoUsuario.textContent = sender;
            mensajeUsuario.textContent = text;

            conversacion.appendChild(nuevoMensajeUsuario);

        } else {
            
            const nuevoMensajePet = cloneHTML.querySelector(".mensaje-pet");
            const mensajePet = chatIndividual.querySelector('.mensaje_text_pet');
            const iconoPet = chatIndividual.querySelector('#icono-pet');

            iconoPet.textContent = sender;
            mensajePet.textContent = text;

            conversacion.appendChild(nuevoMensajePet);

        }

};
    return chatIndividual;
}   
    export default pageChatIndividual;