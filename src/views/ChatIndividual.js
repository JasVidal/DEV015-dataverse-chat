import petsData from '../data/dataset.js';

const pageChatIndividual = (props) => {
  
const pet = petsData.find(item => item.id === props.id);
console.log(pet)
    
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
                    <input name="user-msg" type="text" id="user-msg" placeholder="Escribe aquí tu pregunta...">
                    <i class="fa-solid fa-paper-plane fa-md"></i>
                    </div>

            </div>
        </div>
        </section>
    ` 
    return chatIndividual;
}

export default pageChatIndividual;