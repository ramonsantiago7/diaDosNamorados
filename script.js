const carrossel = document.getElementById('carrossel');
const esquerda = document.querySelector('.esquerda');
const direita = document.querySelector('.direita');

direita.addEventListener('click', () => {
  carrossel.scrollBy({
    left: carrossel.offsetWidth,
    behavior: 'smooth'
  });
});

esquerda.addEventListener('click', () => {
  carrossel.scrollBy({
    left: -carrossel.offsetWidth,
    behavior: 'smooth'
  });
});
