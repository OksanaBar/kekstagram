// Проверяет длину строки
const checkLengthString = (string, Maxlength) => string.length <= Maxlength;

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

const COMMENT_TEXT = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const NAME = [
  'Артём',
  'Егор',
  'Ирина',
  'Кирилл',
  'Алёна',
  'Татьяна',
  'Денис',
  'Анна',
];

const MIN_LIKES = 15;
const MAX_LIKES = 200;

const SIMILAR_DESCRIPTION_COUNT = 25;

const MIN_COMMENT = 1;
const MAX_COMMENT = 3;

const MIN_AVATAR = 1;
const MAX_AVATAR = 6;

// Возвращает случайное целое число из диапазона
const getRandomPositiveInteger = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

// Возвращает случайный элемент массива
const getRandomArrayElement = (elements) => elements[getRandomPositiveInteger(0, elements.length - 1)];

// Создаёт комментарий
let lastUsedIdComment = 1;

const createCommentPhoto = () => ({
  idComment: lastUsedIdComment++,
  avatar: `img/avatar-${getRandomPositiveInteger(MIN_AVATAR, MAX_AVATAR)}.svg`,
  message: getRandomArrayElement(COMMENT_TEXT),
  name: getRandomArrayElement(NAME),
});

let lastUsedId = 1;
let lastUsedUrlNamber = 1;

const createDescriptionPhoto = () => ({
  idPhoto: lastUsedId++,
  urlPhoto: `photos/${lastUsedUrlNamber++}.jpg`,
  descriptionPhoto: `${getRandomArrayElement(DESCRIPTION_PHOTO_WHAT)} ${getRandomArrayElement(DESCRIPTION_PHOTO_WHERE)}`,
  likesPhoto: getRandomPositiveInteger(MIN_LIKES, MAX_LIKES),
  commentsPhoto: Array.from({ length: getRandomPositiveInteger(MIN_COMMENT, MAX_COMMENT) }, createCommentPhoto),
});

const similarDescriptionPhoto = Array.from({ length: SIMILAR_DESCRIPTION_COUNT }, createDescriptionPhoto);

getRandomPositiveInteger(2, 15);
console.log(similarDescriptionPhoto);
