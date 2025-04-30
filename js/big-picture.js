import { isEscapeKey } from './util.js';

const bigPicture = document.querySelector('.big-picture');
const body = document.querySelector('body');
const commentList = document.querySelector('.social__comments');
const commentItems = commentList.children;
const commentsDisplayed = document.querySelector('.comments-displayed');
const commentsLoader = document.querySelector('.comments-loader');
const cancelButton = document.querySelector('.big-picture__cancel');

// Создание комментария
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

// Отрисовка комментариев
const renderComments = (comments) => {
  commentList.innerHTML = '';

  const fragment = document.createDocumentFragment();
  comments.forEach((comment) => {
    const commentElement = createComment(comment);
    fragment.append(commentElement);
  });

  commentList.append(fragment);
};

// Закрытие окна
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

// Отрисовка полноразмерного изображения
const renderPictureDetails = ({ url, likes, description, comments }) => {
  bigPicture.querySelector('.big-picture__img img').src = url;
  bigPicture.querySelector('.big-picture__img img').alt = description;
  bigPicture.querySelector('.likes-count').textContent = likes;
  bigPicture.querySelector('.comments-count').textContent = comments.length;
  bigPicture.querySelector('.social__caption').textContent = description;

  return bigPicture;
};

// Скрытие кнопки Загрузить ещё..
const hideShowMoreButton = (comments) => {
  commentsLoader.classList.remove('hidden');
  if (commentItems.length >= comments.comments.length) {
    commentsLoader.classList.add('hidden');
  }
};

// Отображение дополнительных комментариев
const showMore = (comments) => {
  commentsDisplayed.textContent = commentItems.length;
  hideShowMoreButton(comments);

  let maxComment = 5;
  const showMoreComment = () => {
    maxComment = maxComment + 5;
    renderComments(comments.comments.slice(0, maxComment));
    commentsDisplayed.textContent = commentItems.length;
    hideShowMoreButton(comments);
  };

  commentsLoader.addEventListener('click', showMoreComment);
};

// Открытие окна
const showBigPicture = (data) => {
  bigPicture.classList.remove('hidden');
  body.classList.add('modal-open');
  commentList.innerHTML = '';

  document.addEventListener('keydown', onEscKeyDown);

  renderPictureDetails(data);
  renderComments(data.comments.slice(0, 5));

  showMore(data);
};

export { showBigPicture };
