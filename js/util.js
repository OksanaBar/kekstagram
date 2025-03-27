// Проверяет длину строки
const checkLengthString = (string, Maxlength) => string.length <= Maxlength;

checkLengthString('', 140);

// Возвращает случайное целое число из диапазона
const getRandomPositiveInteger = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

// Возвращает случайный элемент массива
const getRandomArrayElement = (elements) => elements[getRandomPositiveInteger(0, elements.length - 1)];

//Проверка нажатой клавиши
const isEscapeKey = (evt) => evt.key === 'Escape';

export {getRandomArrayElement, getRandomPositiveInteger, isEscapeKey};
