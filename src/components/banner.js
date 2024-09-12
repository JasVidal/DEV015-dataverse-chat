const seccBanner = () => {
  const banner = document.createElement('section');
  banner.className = "banner";
  banner.innerHTML = `
  
<!-- Desktop Banner -->

  <main>
    <section class="banner">
      <div class="izquierda">
          <img class="img-banner" src="./assets/img banner 1.png">
          <img class="vector" src="./assets/Circulo banner 1.svg">
      </div>
      <div class="derecha">
          <div class="texto">
              <h1>Adopta una mascota</h1>
              <h2>Dales un hogar feliz</h2>
              <p>Estos pequeños seres de luz están esperando por ti para llenar tus días de pura felicidad.</p>
              <button id="conocelos-btn">Conócelos</button>
          </div>
      </div>

    </section>`;
  return banner;
}
  
export default seccBanner;