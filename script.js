let nextArrow = document.getElementsByClassName("next_arrow")[0];
let prevArrow = document.getElementsByClassName("prev_arrow")[0];
let images = document.querySelectorAll(".slider_item");
const totalImages = images.length;
let currenSlider = 0;
let autoPlayId;
console.log(images);

nextArrow.addEventListener("click", handleNextArrow);
prevArrow.addEventListener("click", handlePrevArrow);
showSlide(currenSlider);
autoPlay();

function showSlide(index) {
  currenSlider = (index + totalImages) % totalImages;

  images.forEach((img, i) => {
    img.style.display = i === currenSlider ? "block" : "none";
  });
}

// let interval = setInterval(() => {
//   showSlide(currenSlider);
//   currenSlider++;
// }, 2000);

function autoPlay() {
  clearInterval(autoPlayId);
  autoPlayId = setInterval(() => {
    showSlide(currenSlider);
    currenSlider++;
  }, 2000);
}

function pauseforFweSecond() {
  clearInterval(autoPlayId);
  clearTimeout(pauseforFweSecond.restartId);
  pauseforFweSecond.restartId = setTimeout(autoPlay, 2000);
}

function handleNextArrow() {
  showSlide(currenSlider + 1);
  pauseforFweSecond();
}

function handlePrevArrow() {
  showSlide(currenSlider - 1);
  pauseforFweSecond();
}
