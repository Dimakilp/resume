let currentSlide = 0;
const slides = document.querySelectorAll(".section_5_card");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

function showSlide(index) {
  if (index < 0) {
    currentSlide = slides.length - 1;
  } else if (index >= slides.length) {
    currentSlide = 0;
  }

  slides.forEach((slide, i) => {
    if (i === currentSlide) {
      slide.style.display = "flex";
    } else {
      slide.style.display = "none";
    }
  });
}

prevBtn.addEventListener("click", () => {
  currentSlide--;
  showSlide(currentSlide);
});

nextBtn.addEventListener("click", () => {
  currentSlide++;
  showSlide(currentSlide);
});

showSlide(currentSlide);
