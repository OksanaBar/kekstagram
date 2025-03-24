import {createDescriptionPhotos} from './data.js';
import { showBigPicture } from './big-picture.js';

const otherPicturesContainer = document.querySelector('.pictures');

const otherPictureTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const otherPictures = createDescriptionPhotos();

const otherPicturesFragment = document.createDocumentFragment();

otherPictures.forEach(({urlPhoto, likesPhoto, commentsPhoto}) => {
  const pictureElement = otherPictureTemplate.cloneNode(true);
  pictureElement.querySelector('.picture__img').src = urlPhoto;
  pictureElement.querySelector('.picture__likes').textContent = likesPhoto;
  pictureElement.querySelector('.picture__comments').textContent = commentsPhoto.length;

  otherPicturesFragment.appendChild(pictureElement);
});

otherPicturesContainer.appendChild(otherPicturesFragment);
