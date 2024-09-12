import petsData from "../data/dataset.js";
import { navigateTo } from "../router.js";

const seccVerMas = (props) => {
  const pet = petsData.find((item) => item.id === props.id);

  // Convertir la edad a meses
  const { years, months } = pet.facts.age;
  const totalMonths = years * 12 + months;

  let ageDisplay;
  if (totalMonths < 12) {
    ageDisplay = `${months} mes(es)S`;
  } else {
    ageDisplay = `${years} año(s)`;
  }

  const verMas = document.createElement("section");
  verMas.className = "verMas";

  verMas.innerHTML = `
          <i id="btn-cerrar" class="fa-solid fa-circle-xmark"></i>
            <div class="verMas-container">
                <div class="verMas-izquierda">
                    <div itemprop="verMas-img">
                        <img class="verMas-img" src="${pet.imageUrl}" alt="${pet.name}">
                    <div itemprop="name">${pet.name}</div>
                    <button id="btn-chat" href="">Chat <i class="fa-regular fa-comment fa-2xs"></i></button>
                    </div>
                </div>
                <div class="verMas-derecha">
                    <div itemprop="description">${pet.description}</div>
                    <div itemprop="age">Edad: ${ageDisplay}</div>
                    <div itemprop="gender">Género: ${pet.facts.gender}</div>
                    <div itemprop="breed">Raza: ${pet.facts.breed}</div>
                    <div itemprop="size">Tamaño: ${pet.facts.size}</div>
                    <div itemprop="temperament">Comportamiento: ${pet.facts.temperament}</div>
                    <div itemprop="curiosities">Curiosidades: ${pet.extraInfo.curiosities}</div>
                </div>
            </div>
        </section>
    `;

  // Botón cerrar y volver al Home //

  const btnCerrar = verMas.querySelector("#btn-cerrar");
  btnCerrar.addEventListener("click", () => {
    navigateTo("/");
  });

  const btnElement = verMas.querySelector("#btn-chat");
  btnElement.addEventListener("click", () => {
    navigateTo("/chatindividual", { id: pet.id });
  });
  return verMas;
};

export default seccVerMas;
