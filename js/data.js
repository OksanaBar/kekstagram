import {getRandomArrayElement, getRandomPositiveInteger} from './util.js';
import {createCommentPhoto} from './create-comment-photo.js';

const DESCRIPTION_PHOTO_WHAT = [
  'закат',
  'рассвет',
  'горы',
  'дерево',
  'котики',
  'собака',
  'мой завтрак',
  'прогулка',
  'цветочки',
  'любимое кафе',
  'первй снег',
  'ужин',
];

const DESCRIPTION_PHOTO_WHERE = [
  'на улице',
  'ночью',
  'в отпуске',
  'на море',
  'на пляже',
  'на катке',
  'у моего дома',
];

const MIN_LIKES = 15;
const MAX_LIKES = 200;

const SIMILAR_DESCRIPTION_COUNT = 25;

const MIN_COMMENT = 1;
const MAX_COMMENT = 3;

let lastUsedId = 1;
let lastUsedUrlNamber = 1;

const createDescriptionPhoto = () => ({
  idPhoto: lastUsedId++,
  urlPhoto: `photos/${lastUsedUrlNamber++}.jpg`,
  descriptionPhoto: `${getRandomArrayElement(DESCRIPTION_PHOTO_WHAT)} ${getRandomArrayElement(DESCRIPTION_PHOTO_WHERE)}`,
  likesPhoto: getRandomPositiveInteger(MIN_LIKES, MAX_LIKES),
  commentsPhoto: Array.from({ length: getRandomPositiveInteger(MIN_COMMENT, MAX_COMMENT) }, createCommentPhoto),
});

const createDescriptionPhotos = () => Array.from({ length: SIMILAR_DESCRIPTION_COUNT }, createDescriptionPhoto);

export {createDescriptionPhotos};
