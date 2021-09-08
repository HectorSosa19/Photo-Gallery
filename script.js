const lightBoxContainer = document.querySelector('.lightbox');
const lightBoxImage = document.querySelector('.lightbox-img');
const lightBoxText = document.querySelector('.lightbox-text');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const closeButton = document.querySelector('.lightbox-close');
const counter = document.querySelector('.lightbox-counter');
const portafolioItems = document.querySelector('.portafolio-items').children;
let index;
let imgSrc;

lightBoxContainer.addEventListener('click', function(event) {
  if (
    event.target !== lightBoxImage &&
    event.target !== prevButton &&
    event.target !== nextButton
  ) {
    lightBox();
  }
});

for (let i = 0; i < portafolioItems.length; i++) {
  portafolioItems[i].querySelector('.fa').addEventListener('click', function() {
    index = i;
    changeItem();
    lightBox();
  });
}

function next() {
  if (index == portafolioItems.length - 1) {
    index = 0;
  } else {
    index++;
  }
  changeItem();
}

function prev() {
  if (index == 0) {
    index = portafolioItems.length - 1;
  } else {
    index--;
  }
  changeItem();
}

function lightBox() {
  lightBoxContainer.classList.toggle('open');
}

function changeItem() {
  imgSrc = portafolioItems[index].querySelector('img').getAttribute('src');
  lightBoxImage.src = imgSrc;
  counter.innerHTML = `${index + 1} of ${portafolioItems.length}`;
  lightBoxText.innerHTML = portafolioItems[index].querySelector('h2').innerHTML;
}
