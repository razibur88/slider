let slides = document.querySelectorAll(".slide");
let next = document.querySelector(".next");
let prve = document.querySelector(".prve");
let counter = 0;
console.log(slides.length);

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
    if (counter == slides.length) {
      counter = 0;
    }
    imageFunc();
  }
  next1();
});
prve.addEventListener("click", () => {
  function prve1() {
    if (counter == 0) {
      counter = slides.length;
    }
    counter--;
    imageFunc();
  }
  prve1();
});
