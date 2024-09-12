const seccFooter = () => {
  const footer = document.createElement('footer');
  footer.className = "footer";
  footer.innerHTML = `
  
        <div class="column">
      <a href="#">Inicio</a>
      <a href="#">Nosotros</a>
      <a href="#">Regístrate</a>
      <a href="#">Visítanos</a>
    </div>
    <div class="center-column">
      <h3>Salva una vida</h3>
      <img src="./assets/Logo.svg">
      <a class="name">© JASMIN VIDAL 2024</a>
    </div>
    <div class="column">
      <div class="icon">
          <i class="fab fa-facebook-f"></i>
          <i class="fab fa-twitter"></i>
          <i class="fab fa-instagram"></i>
      </div>
    </div>

  </footer>`;
  return footer;
}
  
export default seccFooter;