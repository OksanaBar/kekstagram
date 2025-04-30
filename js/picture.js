import { showBigPicture } from './big-picture.js';

const otherPicturesContainer = document.querySelector('.pictures');

const otherPictureTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const createPicture = (data) => {
  const { url, likes, comments, description } = data;
  const picture = otherPictureTemplate.cloneNode(true);

  picture.querySelector('.picture__img').src = url;
  picture.querySelector('.picture__img').alt = description;
  picture.querySelector('.picture__comments').textContent = comments.length;
  picture.querySelector('.picture__likes').textContent = likes;

  picture.addEventListener('click', () => {
    showBigPicture(data);
  });

  return picture;
};

const renderPictures = (pictures) => {
  const otherPicturesFragment = document.createDocumentFragment();
  pictures.forEach((picture) => {
    const pictureElement = createPicture(picture);
    otherPicturesFragment.append(pictureElement);
  });

  otherPicturesContainer.append(otherPicturesFragment);
};

export { renderPictures };
