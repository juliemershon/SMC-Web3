function assignOnClickEvents() {
    var navlinks = document.getElementsByClassName('nav-link');
    for(i = 0; i < navlinks.length; i++) {
      navlinks[i].onclick = onNavlinkClick;
    }
  }
  
  function onNavlinkClick(event) {
    var id = event.target.getAttribute('id');
    setCSSColors(id);
  }

  function setCSSColors(id) {
      var cssFile = id + ".css";
      document.querySelector('#css_colors').setAttribute('href', cssFile);
  }
  
  assignOnClickEvents();
  

  