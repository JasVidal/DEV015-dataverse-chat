import petsData from '../data/dataset.js';

const seccVerMas = (props) => {
    // pets.forEach((pet) => {
    
    const petName = props.nombre // Mittens

    console.log('😊',petName);

    const [pet]= petsData.filter(e=> e.name.toLowerCase()===petName.toLowerCase())
    console.log("🚀 ~ //pets.forEach ~ pet:", pet)
    // Mittens
    //

          // Convertir la edad a meses
          const { years, months } = pet.facts.age;
          const totalMonths = (years * 12) + months;
      
          let ageDisplay;
          if (totalMonths < 12) {
            ageDisplay = `${months} mes(es)`;
          } else {
            ageDisplay = `${years} año(s)`;
          }
          
   const verMas = document.createElement('section');
     verMas.className = "verMas-contenido";
    verMas.innerHTML = `
            <div class="verMas-container">
            <i class="fa-solid fa-circle-xmark"></i>
                <div class="verMas-izquierda">
                    <div itemprop="verMas-img">
                        <img class="verMas-img" src="${pet.imageUrl}" alt="${pet.name}">
                    <div itemprop="name">${pet.name}</div>
                    <button id="btn-chat">Chat<i class="fa-regular fa-comment fa-2xs" style="color: #ffffff;"></i></button>
                </div>
                <div class="verMas-derecha">
                    <div itemprop="description">${pet.description}</div>
                    <div itemprop="age">Edad: ${pet.ageDisplay}</div>
                    <div itemprop="gender">Género: ${pet.facts.gender}</div>
                    <div itemprop="breed">Raza: ${pet.facts.breed}</div>
                    <div itemprop="size">Tamaño: ${pet.facts.size}</div>
                    <div itemprop="temperament">Comportamiento: ${pet.facts.temperament}</div>
                    <div itemprop="curiosities">Curiosidades: ${pet.extraInfo.curiosities}</div>
                </div>
        </section>
    `;
        // verMas.innerHTML='hola';
        console.log(verMas);
   // section.appendChild(petItem);

        return verMas;
}

export default seccVerMas;