//import dataFunctions from '../lib/dataFunctions.js'
//import petsData from '../data/dataset.js'
import { renderItems } from '../components/tarjetaContenido.js';
import seccNavbar from '../components/navbar.js';
import seccBanner from '../components/banner.js';
import seccTarjetas from '../components/tarjetas.js';
import seccNosotros from '../components/nosotros.js';
import seccRegistrate from '../components/registrate.js';
import seccVisitanos from '../components/visitanos.js';
import seccDonaciones from '../components/donaciones.js';
import seccFooter from '../components/footer.js';

const Home = () => {
  const homeContainer = document.createElement('section');
  homeContainer.className = "home";
  homeContainer.id = "home-container";
  
  const navbarSecction = seccNavbar();
  const bannerSecction = seccBanner();
  const tarjetasSection = seccTarjetas();
  const nosotrosSection = seccNosotros();
  const registrateSection = seccRegistrate();
  const visitanosSection = seccVisitanos();
  const donacionesSection = seccDonaciones();
  const footerSection = seccFooter();

  homeContainer.appendChild(navbarSecction);
  homeContainer.appendChild(bannerSecction);
  homeContainer.appendChild(tarjetasSection);
  homeContainer.appendChild(nosotrosSection);
  homeContainer.appendChild(registrateSection);
  homeContainer.appendChild(visitanosSection);
  homeContainer.appendChild(donacionesSection);
  homeContainer.appendChild(footerSection);
  
  //homeContainer.appendChild(renderItems())
  return homeContainer;
}

export default Home;