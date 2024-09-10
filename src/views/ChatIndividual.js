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

                <div class="conversacion-abajo">
                <article class ="message-receptor">
                <img class="chatIndividual-img" src="${pet.imageUrl}">
                <p class="message_text_rec"></p>
                </article>
                <article class ="message-emisor">
                <p class="message_text_em"></p>
                <i class="fa-solid fa-user fa-md"></i>
                
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
    const mensajeUser = chatIndividual.querySelector('.message_text_em'); 
    const chatInput = chatIndividual.querySelector('.chat-input');
    const chatBtn = chatIndividual.querySelector('.btnchatindividual-enviar');
    const mensajePet = chatIndividual.querySelector('.message_text_rec'); 

    chatBtn.addEventListener('click', async() => {
    mensajeUser.innerHTML = chatInput.value
    const respuesta = await communicateWithOpenAI(chatInput.value);
    mensajePet.innerHTML = respuesta.choices[0].message.content
    console.log(respuesta.choices[0].message.content)
});
    return chatIndividual;
}

export default pageChatIndividual;