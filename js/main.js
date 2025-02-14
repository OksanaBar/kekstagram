// Проверяет длину строки
function checkLengthString(string, Maxlength) {
  return string.length <= Maxlength;
}

checkLengthString('', 140);

// id, число — идентификатор описания.Это число от 1 до 25. Идентификаторы не должны повторяться.
// url, строка — адрес картинки вида photos/{{i}}.jpg, где {{i}} — это число от 1 до 25. Адреса картинок не должны повторяться.
// description, строка — описание фотографии. Описание придумайте самостоятельно.
// likes, число — количество лайков, поставленных фотографии. Случайное число от 15 до 200.
// comments, массив объектов — список комментариев, оставленных другими пользователями к этой фотографии. Количество комментариев к каждой фотографии вы определяете на своё усмотрение. Все комментарии генерируются случайным образом.

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

// Возвращает случайное целое число из диапазона
const getRandomPositiveInteger = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

// Возвращает случайный элемент массива
const getRandomArrayElement = (elements) => elements[getRandomPositiveInteger(0, elements.length - 1)];

// Генерирует ID фотогрфи
let lastUsedId = 1;
let lastUsedUrlNamber = 1;

const createDescriptionPhoto = () => ({
  idPhoto: lastUsedId++,
  urlPhoto: `photos/${lastUsedUrlNamber++}.jpg`,
  descriptionPhoto: `${getRandomArrayElement(DESCRIPTION_PHOTO_WHAT)} ${getRandomArrayElement(DESCRIPTION_PHOTO_WHERE)}`,
  likesPhoto: getRandomPositiveInteger(MIN_LIKES, MAX_LIKES),
  commentsPhoto: [],
});

const similarDescriptionPhoto = Array.from({ length: SIMILAR_DESCRIPTION_COUNT }, createDescriptionPhoto);

getRandomPositiveInteger(2, 15);
console.log(similarDescriptionPhoto);
