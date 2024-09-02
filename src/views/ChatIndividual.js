import petsData from '../data/dataset.js';

const pageChatIndividual = (props) => {
  
  const body = document.createElement('body');
     body.className = "chat-individual";

    
  const chatIndividual = document.createElement('section');
  chatIndividual.innerHTML = 

  
 `
            <header class="headerchat-arriba">
                    <div itemprop="chatIndividual-img">
                        <img class="chatIndividual-img" src="${pet.imageUrl}">
                    <div itemprop="name">${pet.name}</div>
                    <i class="fa-solid fa-ellipsis-vertical fa-comment fa-2xs"></i>
            </header>

                <div class="conversacion-abajo">
                <article class ="message-receptor">
                <img class="chatIndividual-img" src="${pet.imageUrl}">
                <p class="message__text"></p>
                </article>
                <article class ="message-emisor">
                <i class="fa-solid fa-user fa-2xs"></i>
                <p class="message__text"></p>
                </article>
                </div>        
                    <div id="texto">
                    <input name="user-msg" type="text" id="user-msg">
                    <i class="fa-solid fa-paper-plane fa-2xs"></i>
                    </div>
                </div>
            </div>
        </section>
    ` 
    return chatIndividual;
}

export default pageChatIndividual;