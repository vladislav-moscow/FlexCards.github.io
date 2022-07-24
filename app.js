const slides = document.querySelectorAll('.container__slide');

slides.forEach((item) => {
  item.addEventListener('click', () => {
    clearActiveClass();
    item.classList.add('active')
  })
});

function clearActiveClass() {
  slides.forEach((item) => {
    item.classList.remove('active')
  })
}