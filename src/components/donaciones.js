const seccDonaciones = () => {
    const donaciones = document.createElement('section');
    donaciones.className = "donaciones";
    donaciones.innerHTML = `
  
<!-- Desktop Dona Aquí -->

      <div class="donaciones-izquierda">
        <div class="texto-donaciones">
          <h1>Dona Aquí</h1>
          <p>En Monito: Patitas felices, brindamos un refugio amoroso y seguro para perritos que buscan una segunda oportunidad. Aquí, cada peludito recibe el cuidado y cariño que merece. </p>
          <p>¡Conoce nuestro trabajo, a nuestros residentes y únete a nuestra misión para hacer una diferencia en sus vidas!</p>
          <button id="donar-btn">Dona aquí</button>
        </div>
        <img class="img-donaciones" src="./assets/img dona.png">        
        
      </div>
      <div class="donaciones-derecha">
        <div class="planes">
          <img class="vector-donaciones" src="./assets/Vector dona.svg">
          <button id="plan-btn">Plan Mensual</button>
          <button id="plan-btn">Plan Bimestral</button>
          <button id="plan-btn">Plan Anual</button>
      </div>
    </section>`;
    return donaciones;
  }
  
  export default seccDonaciones;