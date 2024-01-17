const imgs = [
  'https://img1.liveinternet.ru/images/attach/c/6/90/338/90338249_48240125_1251808263_4.jpg',
  'https://img0.liveinternet.ru/images/attach/c/6/90/338/90338250_large_48240129_1251808279_5.jpg',
  'https://img0.liveinternet.ru/images/attach/c/6/90/338/90338252_large_48240139_1251808329_8.jpg'
];

const imgEl = document.querySelector('img');
const dots = document.querySelectorAll('.dot');

let slideIndex = 0;

showSlides(slideIndex);

function plusSlides(n) {
  slideIndex += n;

  if (slideIndex >= imgs.length) slideIndex = 0;
  if (slideIndex < 0) slideIndex = imgs.length - 1;

  showSlides(slideIndex);
}

function currentSlide(n) {
  showSlides(slideIndex = n - 1);
}

function showSlides(n) {
  imgEl.src = imgs[n];
  document.querySelector('.dot_active')?.classList.remove('dot_active');
  dots[n].classList.add('dot_active')
}

function prevImage() {
  plusSlides(-1);
}

function nextImage() {
  plusSlides(1);
}
