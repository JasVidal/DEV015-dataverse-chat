const seccIndividual = () => {
    const individual = document.createElement('section');
    individual.className = "individual-contenido";
    individual.innerHTML = `
            <div class="individual-container">
            <i class="fa-solid fa-circle-xmark></i>
                <div class="individual-izquierda">
                        <div itemprop="individual-img">
                            <img class="individual-img" src="${pet.imageUrl}" alt="${pet.name}">
                        <div itemprop="name">${pet.name}</div>
                        <div itemprop="description">${pet.description}</div>
                        <div itemprop="age">Edad: ${ageDisplay}</div>
                        <div itemprop="gender">Género: ${pet.facts.gender}</div>
                        <div itemprop="breed">Raza: ${pet.facts.breed}</div>
                        <div itemprop="size">Tamaño: ${pet.facts.size}</div>
                        <div itemprop="temperament">Comportamiento: ${pet.facts.temperament}</div>
                        <div itemprop="curiosities">Curiosidades: ${pet.extraInfo.curiosities}</div>
                </div>
                <div class="individual-derecha">
                        
                </div>
        </section>
                    `;
    section.appendChild(petItem);

return individual;
}

export default seccIndividual;