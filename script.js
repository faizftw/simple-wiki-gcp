function showDdown(){
  const Ddown = document.querySelector('.drop-down')
  Ddown.style.display = 'flex'
}

function closeDdown(){
  const Ddown = document.querySelector('.drop-down')
  Ddown.style.display = 'none'
}


const slides = document.querySelectorAll('.imgSlide'),
      dots = document.querySelectorAll('.dot');
let slideIndex = 0;

showSlides();

let timer = setInterval(autoSlide, 8000);

function autoSlide() {
    slideIndex++;
    showSlides();
}

function plusSlides(n) {
    slideIndex += n;
    showSlides();
    resetTimer();
}

function currentSlide(n) {
    slideIndex = n;
    showSlides();
    resetTimer();
}

function resetTimer() {
    clearInterval(timer);
    timer = setInterval(autoSlide, 8000);
}

function showSlides() {
    let i;
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }
    if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex].style.display = "block";
    dots[slideIndex].className += " active";
}
