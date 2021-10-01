const carouselCard3 = document.querySelector('.carousel-card3');
const card3 = document.querySelectorAll('.carousel-card3');
const carouselButtons3 = document.querySelectorAll('.carousel-button3');
const numberOfCard3 = document.querySelectorAll('.carousel-card3 img').length;

let imageIndex3 = 1;
let translateX3 = 0;

carouselButtons3.forEach(button => {
  button.addEventListener('click', (event) => {
    if (event.target.id === 'previous3') {
      if (imageIndex3 !== 1) {
        imageIndex3--;
        translateX3 += 147;
      }
    } else {
      if (imageIndex3 !== numberOfCard3) {
        imageIndex3++;
        translateX3 -= 147;
      }
    }

    carouselCard3.style.transform = `translateX(${translateX3}px)`;
    card3.forEach((image, index) => {
      if (index === imageIndex3 - 1) {
        image.classList.add('active');
      } else {
        image.classList.remove('active');
      }
    });
  });
});