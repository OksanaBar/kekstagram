// Проверяет длину строки
function checkLengthString (string, Maxlength) {
  return string.length <= Maxlength;
}

checkLengthString('', 140);

// id, число — идентификатор описания.Это число от 1 до 25. Идентификаторы не должны повторяться.
// url, строка — адрес картинки вида photos/{{i}}.jpg, где {{i}} — это число от 1 до 25. Адреса картинок не должны повторяться.
// description, строка — описание фотографии. Описание придумайте самостоятельно.
// likes, число — количество лайков, поставленных фотографии. Случайное число от 15 до 200.
// comments, массив объектов — список комментариев, оставленных другими пользователями к этой фотографии. Количество комментариев к каждой фотографии вы определяете на своё усмотрение. Все комментарии генерируются случайным образом.

const ID_PHOTOS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];

// const USL_PHOTO = [
//   'photos/1.jpg',
//   'photos/2.jpg',
//   'photos/3.jpg',
// ];

const DESCRIPTION_PHOTO = [
  'закат',
  'рассвет',
  'горы',
  'дерево',
  'дом',
  'котики',
  'собака',
  'мой завтрак',
  'прогулка',
  'цветочки',
  'улица',
  'новое авто',
  'любимое кафе',
  'релакс',
  'ночь',
  'луна',
  'первй снег',
  'примерка',
  'отпуск',
  'море',
  'на пляже',
  'встреча',
  'на катке',
  'рыбалка',
  'ужин',
];

const MIN_LIKES = 15;
const MAX_LIKES = 200;

// const COMMENTS = [
//   '',
//   '',
//   '',
// ];

// Возвращает случайное целое число из диапазона
function getRandomPositiveInteger (a, b) {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

// Возвращает случайный элемент массива
const getRandomArrayElement = (elements) => elements[getRandomPositiveInteger(0, elements.length - 1)];

const createDescriptionPhoto = () => ({
  idPhoto: getRandomArrayElement(ID_PHOTOS),
  urlPhoto: `photos/${  getRandomArrayElement(ID_PHOTOS)  }.jpg`,
  descriptionPhoto: getRandomArrayElement(DESCRIPTION_PHOTO),
  likesPhoto: getRandomPositiveInteger(MIN_LIKES, MAX_LIKES),
  commentsPhoto: 1,
});

const similarDescriptionPhoto = Array.from({length: 25}, createDescriptionPhoto);

getRandomPositiveInteger(2, 15);
similarDescriptionPhoto();
