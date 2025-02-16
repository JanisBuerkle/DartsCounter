function toggleMenu() {
    var menu = document.getElementById('menu');
    var burgerIcon = document.querySelector('.burger-icon');
  
    menu.classList.toggle('show');
    burgerIcon.classList.toggle('open');
  }
  
  window.addEventListener("load", function () {
    document.documentElement.classList.add("visible");
  });