import {isEscapeKey} from './util.js';

const bigPicture = document.querySelector('.big-picture');
const body = document.querySelector('body');
const commentList = document.querySelector('.social__comments');
// const commentCount = document.querySelector('.social__comment-count');
const commentsLoader = document.querySelector('.comments-loader');
const cancelButton = document.querySelector('.big-picture__cancel');

//Создание комментария
const createComment = ({ avatar, name, message }) => {
  const comment = document.createElement('li');
  comment.innerHTML =
    '<img class="social__picture" src="" alt="" width="35" height="35"><p class="social__text"></p>';
  comment.classList.add('social__comment');

  comment.querySelector('.social__picture').src = avatar;
  comment.querySelector('.social__picture').alt = name;
  comment.querySelector('.social__text').textContent = message;

  return comment;
};

//Отрисовка комментариев
const renderComments = (comments) => {
  commentList.innerHTML = '';

  const fragment = document.createDocumentFragment();
  comments.forEach((comment) => {
    const commentElement = createComment(comment);
    fragment.append(commentElement);
  });

  commentList.append(fragment);
};

//Закрытие окна
const hideBigPicture = () => {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onEscKeyDown);
};

function onEscKeyDown(evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    hideBigPicture();
  }
}

const onCancelButtonClick = () => {
  hideBigPicture();
};

cancelButton.addEventListener('click', onCancelButtonClick);

//Отрисовка полноразмерного изображения
const renderPictureDetails = ({ urlPhoto, likesPhoto, descriptionPhoto, commentsPhoto }) => {
  bigPicture.querySelector('.big-picture__img img').src = urlPhoto;
  bigPicture.querySelector('.big-picture__img img').alt = descriptionPhoto;
  bigPicture.querySelector('.likes-count').textContent = likesPhoto;
  bigPicture.querySelector('.comments-count').textContent = commentsPhoto.length;
  bigPicture.querySelector('.social__caption').textContent = descriptionPhoto;

  return bigPicture;
};

const showMore = (asd) => {
  const showMoreComment = () => {
    renderComments(asd.commentsPhoto.slice(5, 10));
  };

  commentsLoader.addEventListener('click', showMoreComment);
};

//Открытие окна
const showBigPicture = (data) => {
  bigPicture.classList.remove('hidden');
  body.classList.add('modal-open');

  document.addEventListener('keydown', onEscKeyDown);

  renderPictureDetails(data);
  renderComments(data.commentsPhoto.slice(0, 5));

  showMore(data);
};

export {showBigPicture};
