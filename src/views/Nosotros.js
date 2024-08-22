const seccNosotros = () => {
    const nosotros = document.createElement('section');
    nosotros.className = "nosotros";
    nosotros.innerHTML = `
  
        <div class="nosotros-izquierda">
          <img class="img-nosotros" src="./assets/img nosotros.png">
          <img class="vector-nosotros" src="./assets/Vector nosotros.svg">
      </div>
      <div class="nosotros-derecha">
          <div class="texto-nosotros">
              <h1>Nosotros</h1>
              <p>En Monito: Patitas felices, brindamos un refugio amoroso y seguro para perritos que buscan una segunda oportunidad.</p>
              <p>Aquí, cada peludito recibe el cuidado y cariño que merece. ¡Conoce nuestro trabajo, a nuestros residentes y únete a nuestra misión para hacer una diferencia en sus vidas!</p>
              <button id="sumate-btn">Súmate al cambio</button>
          </div>
      </div>
    </section>`;
    return nosotros;
  }
  
  export default seccNosotros;