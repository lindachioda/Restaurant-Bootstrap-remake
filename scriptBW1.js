
/* animazione nav barra */
const navbar = document.querySelector('.navbar');
const header = document.querySelector('.home');

window.addEventListener('scroll', () => {
  const headerBottom = home.offsetTop + home.offsetHeight;
  if (window.scrollY >= headerBottom - 105) {
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');
  }
});


/* animazione SLIDER immagini */
let track = document.querySelector('.carousel-track');
let nextBtn = document.querySelector('#nextBtn');

let slideWidth = track.children[0].getBoundingClientRect().width;
let moving = false;

// Funzione che sposta la prima slide alla fine (loop)
function replaceToEnd() {
  const firstSlide = track.firstElementChild;

  // rimuovo la prima slide...
  firstSlide.parentNode.removeChild(firstSlide);
  // ...e la aggiungo in fondo
  track.appendChild(firstSlide);

  // riposiziono la track per tornare all'offset originale
  track.style.transition = "none"; 
  track.style.transform = "translateX(0px)";

  // ricalcolo la larghezza slide (nel caso sia responsive)
  slideWidth = track.children[0].getBoundingClientRect().width;

  // finito → permetto di cliccare di nuovo
  moving = false;
}

// Evento click per andare avanti
nextBtn.addEventListener('click', () => {
  if (moving) return; // evita doppi click veloci
  moving = true;

  slideWidth = track.children[0].getBoundingClientRect().width;

  // sposto tutta la track verso sinistra di UNA slide
  track.style.transition = "transform 0.4s ease";
  track.style.transform = `translateX(-${slideWidth}px)`;

  // quando finisce la transizione → sposta slide
  track.addEventListener('transitionend', replaceToEnd, { once: true });
});



/* fade-in elementi appaiono da sx */

/*Cerca tutti gli elementi HTML che hanno class="reveal"
Li salva in una lista (NodeList) chiamata reveals.*/



/*bounce in BOTTONI*/
const reveals = document.querySelectorAll('.reveal');

function checkReveal() {
  for (let el of reveals) {
    const rect = el.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight - 80; 
    if (isVisible) {
      el.classList.add('active');
    }
  }
}

window.addEventListener('scroll', checkReveal);
window.addEventListener('load', checkReveal);



/*MENU HAMBURGER*/
const burger = document.querySelector('.hamburger');
const nav = document.querySelector('.navmenu');

burger.addEventListener('click', () => {
    nav.classList.toggle('open');
});