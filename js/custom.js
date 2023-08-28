let slides = document.querySelectorAll(".slide");
let next = document.querySelector(".next");
let prve = document.querySelector(".prve");
let counter = 0;

slides.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});

const imageFunc = () => {
  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
};

next.addEventListener("click", () => {
  function next1() {
    counter++;
    imageFunc();
  }
  next1();
});
prve.addEventListener("click", () => {
  function prve1() {
    counter--;
    imageFunc();
  }
  prve1();
});
