const seccVerMas = () => {
    constverMas = document.createElement('section');
    verMas.className = "verMas-contenido";
    verMas.innerHTML = `
            <div class="verMas-container">
            <i class="fa-solid fa-circle-xmark></i>
                <div class="verMas-izquierda">
                        <div itemprop="verMas-img">
                            <img class="verMas-img" src="${pet.imageUrl}" alt="${pet.name}">
                </div>
                <div class="verMas-derecha">
                        <div itemprop="name">${pet.name}</div>
                        <div itemprop="description">${pet.description}</div>
                        <div itemprop="age">Edad: ${ageDisplay}</div>
                        <div itemprop="gender">Género: ${pet.facts.gender}</div>
                        <div itemprop="breed">Raza: ${pet.facts.breed}</div>
                        <div itemprop="size">Tamaño: ${pet.facts.size}</div>
                        <div itemprop="temperament">Comportamiento: ${pet.facts.temperament}</div>
                        <div itemprop="curiosities">Curiosidades: ${pet.extraInfo.curiosities}</div>
                </div>
        </section>
                    `;
    section.appendChild(petItem);

return section;
}

export default seccVerMas;