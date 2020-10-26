import gallerysItems from './gallery-items.js'
console.log(gallerysItems);

const creatItem = ({preview, original, description}) => {
  return `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
  <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"/>
  </a></li>`; 
}
const makeGalleryWindow = gallerysItems.map(creatItem).join('');

const refs = {
  listGallery : document.querySelector('.js-gallery'),
  modal : document.querySelector('.lightbox'),
  backdrop : document.querySelector('.lightbox__overlay'),
  image : document.querySelector('.lightbox__image'),
  closeModalBtn : document.querySelector('.lightbox__button'),
};

refs.listGallery.insertAdjacentHTML("afterbegin", makeGalleryWindow);  //добавляє вікно малюнків
refs.listGallery.addEventListener('click', onOpenImg);    //робить перенаправлення і добавляє стилі модального вікна
refs.closeModalBtn.addEventListener('click', onCloseModal);
refs.backdrop.addEventListener('click', onBackdropClick); 

function onOpenImg(evt) {
  evt.preventDefault();
    if (evt.target.nodeName !== 'IMG') {
        return;
    };

  refs.modal.classList.add('is-open');
 //перенаправлення
  refs.image.src = evt.target.dataset.source;
  refs.image.alt = evt.target.alt;
  //закриття по Esc
  window.addEventListener('keydown' , onEscKeyPress);
};

function onEscKeyPress (evt) {
  if(evt.code !== 'Escape'){
    return;
  };
  onCloseModal();
}

function onCloseModal () {
    refs.modal.classList.remove('is-open');
    window.removeEventListener('keydown' , onEscKeyPress);
};

function onBackdropClick (evt) {
  if (evt.currentTarget === evt.target) {
    onCloseModal ();
  };
};
