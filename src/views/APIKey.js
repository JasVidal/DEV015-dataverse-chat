import seccNavbar from "../components/navbar.js";
import seccFooter from "../components/footer.js";
import seccApiKey from "../components/apikey.js";

const ApiKeypage = () => {
  const ApiKey = document.createElement("section");
  ApiKey.className = "Apipage";

  ApiKey.appendChild(seccNavbar());
  ApiKey.appendChild(seccApiKey());
  ApiKey.appendChild(seccFooter());

  //------------------ Agregando Funciones ------------------//

  //------------------ Botones principales ------------------//

  /*Botón para abrir y cerrar Sidebar */

  window.onload = function () {
    const menuBtn = ApiKey.querySelector(".menu-btn");
    const btnCloseIcon = ApiKey.querySelector(".btn-close i");
    const dropDownMenu = ApiKey.querySelector(".sidebar");

    menuBtn.onclick = function () {
      dropDownMenu.classList.toggle("active");
    };

    btnCloseIcon.onclick = function () {
      dropDownMenu.classList.remove("active");
    };
  };

  return ApiKey;
};

export default ApiKeypage;
