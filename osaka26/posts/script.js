const track = document.querySelector('.track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');

let currentIndex = 0;

const updateCarousel = (index) => {
  // Moves the track by 100% multiplied by the current index
  track.style.transform = `translateX(-${index * 100}%)`;
};

nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slides.length; // Loops back to start
  updateCarousel(currentIndex);
});

prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length; // Loops to end
  updateCarousel(currentIndex);
});
