const seccRegistrate = () => {
    const registrate = document.createElement('section');
    registrate.className = "registrate";
    registrate.innerHTML = `
  
        <div class="registrate-izquierda">
        <div class="txt-registrate">
          <h1>Regístrate</h1>
          <p>Déjanos todos tus datos en nuestro formulario y nos pondremos en contacto contigo lo más pronto posible.</p>
          <img class="img-registrate" src="./assets/img regístrate.png">
        </div>
      </div>
      <div class="registrate-derecha">
      <img class="vector-registrate" src="./assets/Vector regístrate.svg">
      <div class="form">
        <input type="text" id="nombre" name="usuario_nombre" placeholder="Nombre"/>
        <input type="text" id="apellido" name="usuario_apellido" placeholder="Apellido"/>
        <input type="text" id="ciudad" name="usuario_ciudad" placeholder="Ciudad"/>
        <input type="text" id="celular" name="usuario_celular" placeholder="Celular"/><br>
        <button id="enviar">Enviar</button>
      </div>
    </div>    
    </section>`;
    return registrate;
  }
  
  export default seccRegistrate;