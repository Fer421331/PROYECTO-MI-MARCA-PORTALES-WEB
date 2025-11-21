document.addEventListener("DOMContentLoaded", () => {

  const carouselTrack = document.querySelector('.carousel-track');
  const slides = document.querySelectorAll('.carousel-track .hero');
  let index = 0;

  function moveToSlide(i) {
    index = i;
    if (index >= slides.length) index = 0;
    if (index < 0) index = slides.length - 1;
    carouselTrack.style.transform = `translateX(-${index * 100}vw)`;
  }

  // Botones manuales
  const btnNext = document.querySelector('.btn-next');
  const btnPrev = document.querySelector('.btn-prev');

  if (btnNext) btnNext.addEventListener('click', () => moveToSlide(index + 1));
  if (btnPrev) btnPrev.addEventListener('click', () => moveToSlide(index - 1));

  // 🚀 Carrusel automático cada 4 seg
  setInterval(() => {
    moveToSlide(index + 1);
  }, 4000);

});
