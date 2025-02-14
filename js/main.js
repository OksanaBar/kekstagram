// Проверяет длину строки
function checkLengthString(string, Maxlength) {
  return string.length <= Maxlength;
}

checkLengthString('', 140);

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
const SIMILAR_COMMENT_COUNT = 2;

// Возвращает случайное целое число из диапазона
const getRandomPositiveInteger = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

// Возвращает случайный элемент массива
const getRandomArrayElement = (elements) => elements[getRandomPositiveInteger(0, elements.length - 1)];


const createCommentPhoto = () => ({
  id: 135,
  avatar: 'img/avatar-6.svg',
  message: 'В целом всё неплохо. Но не всё.',
  name: 'Артём',
});

const similarComment = Array.from({ length: SIMILAR_COMMENT_COUNT }, createCommentPhoto);

let lastUsedId = 1;
let lastUsedUrlNamber = 1;

const createDescriptionPhoto = () => ({
  idPhoto: lastUsedId++,
  urlPhoto: `photos/${lastUsedUrlNamber++}.jpg`,
  descriptionPhoto: `${getRandomArrayElement(DESCRIPTION_PHOTO_WHAT)} ${getRandomArrayElement(DESCRIPTION_PHOTO_WHERE)}`,
  likesPhoto: getRandomPositiveInteger(MIN_LIKES, MAX_LIKES),
  commentsPhoto: similarComment,
});

const similarDescriptionPhoto = Array.from({ length: SIMILAR_DESCRIPTION_COUNT }, createDescriptionPhoto);

getRandomPositiveInteger(2, 15);
console.log(similarDescriptionPhoto);
