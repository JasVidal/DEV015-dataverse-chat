const seccNavbar = () => {
  const navbar = document.createElement('header');
  navbar.innerHTML = `
  
<!----------------------- Mobile Structure ----------------------->


<!-- Mobile Sidebar -->

      <aside class="sidebar">
          <ul>
              <div class="btn-close" >
                  <li><i class="fa-solid fa-xmark"></i></li>
              </div>
              <li>Inicio</li>
              <li>Nosotros</li>
              <li>Regístrate</li>
              <li>Ubícanos</li>
              <li class="li-sidebar-donations">Dona aquí</li>
          </ul>

      </aside>


<!----------------------- Desktop Structure ----------------------->

<!-- Desktop Navbar -->

      <nav>
          <div class="menu-btn">
              <i class="fa-solid fa-bars"></i>
          </div>
          <ul>
            <h1><i class="fa-solid fa-paw fa-xs"></i> Monito</h1>
          </ul>
          <ul class="navbar-options">
            <li>Inicio</li>
            <li>Nosotros</li>
            <li>Regístrate</li>
            <li>Ubícanos</li>
            <li class="li-donations">Dona aquí <i class="fa-solid fa-heart"></i></li>
            <i class="fa-solid fa-user"></i>
          </ul>
      </nav>
  </header>`;
  return navbar;
}

export default seccNavbar;