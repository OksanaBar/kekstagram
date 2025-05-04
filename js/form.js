import { isEscapeKey } from './util.js';
import { onSmallerButtonClick, onBiggerButtonClick, resetScale } from './Image-scaling.js';
import { onFormChange, resetEffects } from './image-effect.js';

const form = document.querySelector('.img-upload__form');
const body = document.querySelector('body');
const overlay = form.querySelector('.img-upload__overlay');
const hideButton = form.querySelector('.img-upload__cancel');
const hashtagField = document.querySelector('.text__hashtags');
const commentField = document.querySelector('.text__description');
const smallerButton = document.querySelector('.scale__control--smaller');
const biggerButton = document.querySelector('.scale__control--bigger');
const sliderElement = document.querySelector('.effect-level__slider');
const cancelButton = document.querySelector('#upload-cancel');
const uploadFile = document.querySelector('#upload-file');
const submitButton = form.querySelector('.img-upload__submit');
const photoPreview = document.querySelector('.img-upload__preview img');
const effectsPreviews = document.querySelectorAll('.effects__preview');

const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];
const MAX_HASHTAG_COUNT = 5;
const UNVALID_SYMBOLS =  /^#[A-Za-zА-Яа-яЕё0-9]{1,19}$/;

const pristine = new Pristine(form, {
  classTo: 'img-upload__text',
  errorTextParent: 'img-upload__text',
  errorTextClass: 'img-upload__error',
});

const showEditorPhoto = () => {
  overlay.classList.remove('hidden');
  body.classList.add('modal-open');
  sliderElement.classList.add('hidden');

  document.addEventListener('keydown', onEscKeyDown);
};

const hideEditorPhoto = () => {
  form.reset();
  pristine.reset();
  resetScale();
  resetEffects();
  overlay.classList.add('hidden');
  body.classList.remove('modal-open');
  // Мешает показывать уведомления отправки.
  // document.remuveEventListener('keydown', onEscKeyDown);
};

const isTextFieldFocused = () =>
  document.activeElement === hashtagField ||
  document.activeElement === commentField;

function onEscKeyDown(evt) {
  if (isEscapeKey(evt) && !isTextFieldFocused()) {
    evt.preventDefault();
    hideEditorPhoto();
  }
}

const onHideButtonClick = () => {
  hideEditorPhoto();
};

hideButton.addEventListener('click', onHideButtonClick);

const onFileInputChange = () => {
  // загрузка превью тут
  const file = uploadFile.files[0];
  const fileName = file.name.toLowerCase();
  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

  if (matches) {
    photoPreview.src = URL.createObjectURL(file);
    effectsPreviews.forEach((preview) => {
      preview.style.backgroundImage = `url('${photoPreview.src}')`;
    });
  }

  showEditorPhoto();
};

// Масштабирование изображения
smallerButton.addEventListener('click', onSmallerButtonClick);
biggerButton.addEventListener('click', onBiggerButtonClick);

// Наложение эффекта
form.addEventListener('change', onFormChange);

// Валидация хэш-тегов
const hasValidSymbols = (string) => UNVALID_SYMBOLS.test(string);

const isValidTag = (tag) => hasValidSymbols(tag);

const hasValidCount = (tags) => tags.length <= MAX_HASHTAG_COUNT;

const hasUniqueTags = (tags) => {
  const lowerCaseTags = tags.map((tag) => tag.toLowerCase());
  return lowerCaseTags.length === new Set(lowerCaseTags).size;
};

const validateTags = (value) => {
  const tags = value
    .trim()
    .split(' ')
    .filter((tag) => tag.trim().length);
  return hasValidCount(tags) && hasUniqueTags(tags) && tags.every(isValidTag);
};

const blockSubmitButton = () => {
  submitButton.disabled = true;
  submitButton.textContent = 'Отправляю...';
};

const unblockSubmitButton = () => {
  submitButton.disabled = false;
  submitButton.textContent = 'Опубликовать';
};

pristine.addValidator(
  hashtagField,
  validateTags,
  'Неправильно заполнены хэштеги'
);

const onFormSubmit = (cb) => {
  form.addEventListener('submit', async (evt) => {
    evt.preventDefault();
    const isValid = pristine.validate();

    if (isValid) {
      blockSubmitButton();
      await cb(new FormData(form));
      unblockSubmitButton();
    }
  });
};

uploadFile.addEventListener('change', onFileInputChange);
cancelButton.addEventListener('click', onHideButtonClick);


// const onFormSubmit = (evt) => {
//   if (!pristine.validate()) {
//     evt.preventDefault();
//   }
// };

// form.addEventListener('submit', onFormSubmit);

export { onFormSubmit, hideEditorPhoto };
