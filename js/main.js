// Возвращает случайное целое число из диапазона
function getRandomInteger(firstNumber, secondNumber) {
  if (typeof firstNumber !== 'number' || typeof secondNumber !== 'number') {
    throw new Error('Параметр должен быть число');
  }

  const minNumber = Math.ceil(Math.min(Math.abs(firstNumber), Math.abs(secondNumber)));
  const maxNumber = Math.floor(Math.max(Math.abs(firstNumber), Math.abs(secondNumber)));
  const result = Math.random() * (maxNumber - minNumber + 1) + minNumber;
  return Math.floor(result);
}

// Проверяет длину строки
function checkLengthString (string, Maxlength) {
  return string.length <= Maxlength;
}

getRandomInteger(2, 15);
checkLengthString('', 140);
