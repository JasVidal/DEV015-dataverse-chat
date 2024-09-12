const seccVisitanos = () => {
  const visitanos = document.createElement('section');
  visitanos.className = "visitanos";
  visitanos.innerHTML = `
  
<!-- Desktop Visítanos -->

      <div class="visitanos-izquierda">
          <img class="rect-visitanos" src="./assets/Rectangle visitanos.svg">
          <p>Av. Monito Place<br> 578, Lima Perú</p>
          <img class="img-visitanos" src="./assets/img ubi.png">
          <img class="img-visitanos2" src="./assets/img mapa.svg">
          <img class="vector-visitanos" src="./assets/Vector visítanos.svg">
      </div>
      <div class="visitanos-derecha">
          <div class="texto-visitanos">
              <h1>Visítanos</h1>
              <p>Llámanos o escríbenos al WhatsApp y agenda una cita para conocer a todos nuestros bellos pequeños y alegra tu día.</p>
              <p>Además, accedes a descuentos exclusivos para ti y tu mascota, míralos aquí.</p>
              <button id="contactanos-btn">Contáctanos</button>
          </div>
      </div>
    </section>`;
  return visitanos;
}
  
export default seccVisitanos;