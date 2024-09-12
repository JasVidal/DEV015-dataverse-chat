import { navigateTo } from "../router.js";

const Error = () => {
  const error = document.createElement("section");
  error.className = "error";
  error.innerHTML = `
<div class="error-contain">
  <h1 class="mensaje-error">Error 404: Page Not Found</h1>
    <p class="texto-error">No podemos encontrar la página que estás buscando</p>
    <button class="btn-volver">Volver al Inicio</button>
</div>
  </section>`;

// Botón volver a Home //

  const btnInicio = error.querySelector(".btn-volver");
  btnInicio.addEventListener("click", () => {
    navigateTo("/");
  });

  return error;
};

export default Error;
