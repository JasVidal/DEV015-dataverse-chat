import { navigateTo } from "../router.js";

export const renderItems = (pets) => {
  const ul = document.createElement("ul");
  ul.className = "ul-tarjeta";
  
  pets.forEach((pet) => {
    const petItem = document.createElement("li");
    petItem.className = "tarjeta";
    petItem.setAttribute('itemscope','');
    petItem.setAttribute('itemtype','http://schema.org/Pet');
  
    // Convertir la edad a meses
    const { years, months } = pet.facts.age;
    const totalMonths = (years * 12) + months;
  
    let ageDisplay;
    if (totalMonths < 12) {
      ageDisplay = `${months} mes(es)`;
    } else {
      ageDisplay = `${years} año(s)`;
    }
  
  
    // Usar la función para obtener el HTML
    petItem.innerHTML = `
                            <div itemprop="tarjeta-img">
                              <img class="tarjeta-img" src="${pet.imageUrl}" alt="${pet.name}">
                            </div>
                            <div itemprop="name">${pet.name}</div>
                            <div itemprop="short-description">${pet.shortDescription}</div>
                            <div itemprop="age">Edad: ${ageDisplay}</div>
                            <div itemprop="gender">Género: ${pet.facts.gender}</div>
                            <div itemprop="breed">Raza: ${pet.facts.breed}</div>
                            <div itemprop="size">Tamaño: ${pet.facts.size}</div>
                            <div itemprop="temperament">Comportamiento: ${pet.facts.temperament}</div>
                            <div class="botones">
                              <button id="ver-mas" href="/vermas?nombre=${pet.name}">Ver <i class="fa-solid fa-circle-plus"></i></button>
                              <button class="btn-chat">Chat <i class="fa-sharp fa-regular fa-comment"></i></button>
                            </div>
                          </ul>
                        `;

    const btnVerMas = petItem.querySelector("#ver-mas");
    btnVerMas.addEventListener('click', () => {
      navigateTo ("/vermas", {id:pet.id})
    } )                

    const btnElement = petItem.querySelector(".btn-chat");
    btnElement.addEventListener('click', () => {
      navigateTo ("/chatindividual", {id:pet.id})
    } )
    ul.appendChild(petItem);
  });
  
  return ul;
};
  
  