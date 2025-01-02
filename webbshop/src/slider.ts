const slider = document.getElementById("slider") as HTMLElement;
const prevButton = document.querySelector(".prev") as HTMLElement;
const nextButton = document.querySelector(".next") as HTMLElement;

let currentIndex = 0;
const slides = document.querySelectorAll(".slide");
function moveSlider() {
  const offset = -(currentIndex * 100);
  slider.style.transform = `translateX(${offset}%)`;
}

nextButton.addEventListener("click", () => {
    if (currentIndex < slides.length - 1) {
      currentIndex++;
    } else {
      currentIndex = 0;
    }
    moveSlider();
  });
  prevButton.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
    } else {
      currentIndex = slides.length - 1;
    }
    moveSlider();
  });
moveSlider();

const interval = (timer: number) =>
  setInterval(() => {
    if (currentIndex < slides.length - 1) {
      currentIndex++;
    } else {
      currentIndex = 0;
    }
    moveSlider();
  }, timer);
interval(2000);
moveSlider();

