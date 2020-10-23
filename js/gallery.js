import gallerysItems from './gallery-items.js'
console.log(gallerysItems);

const creatItem = ({preview, original, description}) => {
  return `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
  <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"/>
  </a></li>`; 
}
const makeGalleryWindow = gallerysItems.map(creatItem).join('');
console.log(makeGalleryWindow);

const refs = {
  listGallery : document.querySelector('js-gallery'),
  modal : document.querySelector('lightbox'),
  backdrop : document.querySelector('lightbox__overlay'),
  image : document.querySelector('lightbox__image'),
  closeModalBtn : document.querySelector('lightbox__button'),
};
console.log(refs);







// preview:
// 'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
// original:
// 'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
// description: 'Lighthouse Coast Sea',
// },
/* <li class="gallery__item">
  <a
    // class="gallery__link"
    href="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546_1280.jpg"
  >
    <img
      class="gallery__image"
      src="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546__340.jpg"
      data-source="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546_1280.jpg"
      alt="Tulips"
    />
  </a>
</li> */

