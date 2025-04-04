const image = document.querySelector('.img-upload__preview img');
const scaleInput = document.querySelector('.scale__control--value');

const SCALE_STEP =  25;
const MIN_SCALE = 25;
const MAX_SCALE = 100;
const DEFAULT_SCALE = 100;

const scaleImage = (value = DEFAULT_SCALE) => {
  image.style.transform = `scale(${value / 100})`;
  scaleInput.value = `${value}%`;
};

const onSmallerButtonClick = () => {
  const currentScaleValue = parseInt(scaleInput.value, 10);
  let newScaleValue = currentScaleValue - SCALE_STEP;

  if ( newScaleValue < MIN_SCALE) {
    newScaleValue = MIN_SCALE;
  }
  scaleImage(newScaleValue);
};

const onBiggerButtonClick = () => {
  const currentScaleValue = parseInt(scaleInput.value, 10);
  let newScaleValue = currentScaleValue + SCALE_STEP;

  if ( newScaleValue > MAX_SCALE) {
    newScaleValue = MAX_SCALE;
  }
  scaleImage(newScaleValue);
};

const resetScale = () => {
  scaleImage(DEFAULT_SCALE);
};

export {onSmallerButtonClick, onBiggerButtonClick, resetScale};
