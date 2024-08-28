const seccTarjetas = () => {
  const tarjetas = document.createElement('section');
  tarjetas.className = "mascotas-container";
  tarjetas.id = "tarjetas-section";
  tarjetas.innerHTML = `

<!-- Desktop Tarjetas -->

    <section class="mascotas-container" id="tarjetas-section">

      <div class="mascotas-barra">
        <ul class="opciones-mascota">
          <li class="boton-filtros"><i class="fa-solid fa-bars" id="bars-2"></i>Filtros</li>
            <label id="orden"> Ordenar por:
                <input id="asc" type="radio" name="sort-order" value="asc" data-testid="select-sort"><i class="fa-solid fa-arrow-down-a-z" style="color: #ed8a0a;"></i>
                <input id="desc" type="radio" name="sort-order" value="desc" data-testid="select-sort"><i class="fa-solid fa-arrow-up-a-z" style="color: #ed8a0a;"></i>
            </label>
            <button id="btn-estadísticas">Estadísticas</button>
        </ul>
      </div>

      <div class="mascotas-filtros">
        <label for="tipo"></label>
          <select id="tipo" name="elegir" data-testid="select-filter">
            <option value="Tipo" disabled selected hidden>Tipo</option>
            <option value="Perro">Perro</option>
            <option value="Gato">Gato</option>
          </select>

          <label for="edad"></label>
          <select id="edad" name="elegir">
            <option value="Edad" disabled selected hidden>Edad</option>
            <option value="Cachorro">Cachorro</option>
            <option value="Adulto">Adulto</option>
            <option value="Mayor">Mayor</option>
          </select>

          <label for="genero"></label>
          <select id="genero" name="elegir">
            <option value="Genero" disabled selected hidden>Género</option>
            <option value="Macho">Macho</option>
            <option value="Hembra">Hembra</option>
          </select>

          <label for="tamaño"></label>
          <select id="tamaño" name="elegir">
            <option value="Tamaño" disabled selected hidden>Tamaño</option>
            <option value="Pequeño">Pequeño</option>
            <option value="Mediano">Mediano</option>
            <option value="Grande">Grande</option>
          </select>

          <div>
          <button id="btn-limpiar" data-testid="button-clear">Limpiar</button>
          </div>
        </div>
      <section class="mascotas-tarjetas">
        <div class="estadisticas-section">
        <div class="btn-close2">
          <li><i class="fa-solid fa-xmark"></i></li>
          <p class="adoptados"></p>
          <div class="graphics"></div>
        </div>
        </div>
        <h2 class="nuestras-mascotas">
          <span>Nuestras</span>
          <span class="titulo-secundario">mascotas</span>
        </h2>
        <div class="huesos1">
          <img class="img-hueso1" src="./assets//hueso.png">
          <img class="img-hueso2" src="./assets//hueso.png">
        </div>
        <div id="root">

        </div>
        <div class="huesos2">
        <img class="img-hueso3" src="./assets//hueso.png">
        <img class="img-hueso4" src="./assets//hueso.png">
        </div>

        <a target="_blank" class="bx icon-rrss bxl-whatsapp wsp-icon" href="https://api.whatsapp.com/send?phone=51940158503&amp;text=Buenos%20d%C3%ADas,%20deseo%20sacar%20una%20cita">
		</a>
      </section>

    </section>`;
  return tarjetas;
}

export default seccTarjetas;