import dataFunctions from '../lib/dataFunctions.js';
import petsData from '../data/dataset.js';
import { renderItems } from '../components/tarjetaContenido.js';
import seccNavbar from '../components/navbar.js';
import seccBanner from '../components/banner.js';
import seccTarjetas from '../components/Tarjetas.js';
import seccNosotros from '../components/nosotros.js';
import seccRegistrate from '../components/registrate.js';
import seccVisitanos from '../components/visitanos.js';
import seccDonaciones from '../components/donaciones.js';
import seccFooter from '../components/footer.js';

const { showPets, filterDataByType, filterDataByAge, filterDataByValue, orderPetsBy, countAdoptedPets } = dataFunctions;

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
  
 /* 
  const funShowTarjetas = dataFunctions.showPets();
  const funFilterType = dataFunctions.filterDataByType();
  const funFilterAge = dataFunctions.filterDataByAge();
  const funFilterValue = dataFunctions.filterDataByValue(); */

  const filteredPets = filterDataByType(petsData, 'type');
  const sortedPets = orderPetsBy(filteredPets, 'age'); 

  homeContainer.appendChild(navbarSecction);
  homeContainer.appendChild(bannerSecction);
  homeContainer.appendChild(tarjetasSection);
  tarjetasSection.appendChild(renderItems(petsData));
  homeContainer.appendChild(nosotrosSection);  
  homeContainer.appendChild(registrateSection);
  homeContainer.appendChild(visitanosSection);
  homeContainer.appendChild(donacionesSection);
  homeContainer.appendChild(footerSection);

  return homeContainer;
}

export default Home;