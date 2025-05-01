const sliderElement = document.querySelector('.effect-level__slider');
const image = document.querySelector('.img-upload__preview img');
const effectLevel = document.querySelector('.effect-level__value');

const EFFECTS = [
  {
    name: 'none',
    min: 0,
    max: 100,
    step: 1,
  },
  {
    name: 'chrome',
    style: 'grayscale',
    min: 0,
    max: 1,
    step: 0.1,
    unit: '',
  },
  {
    name: 'sepia',
    style: 'sepia',
    min: 0,
    max: 100,
    step: 1,
    unit: '%',
  },
  {
    name: 'marvin',
    style: 'invert',
    min: 0,
    max: 100,
    step: 1,
    unit: '%',
  },
  {
    name: 'phobos',
    style: 'blur',
    min: 0,
    max: 3,
    step: 0.1,
    unit: 'px',
  },
  {
    name: 'heat',
    style: 'brightness',
    min: 1,
    max: 3,
    step: 0.1,
    unit: '',
  },
];

const DEFAULT_EFFECT = EFFECTS[0];

noUiSlider.create(sliderElement, {
  range: {
    min: DEFAULT_EFFECT.min,
    max: DEFAULT_EFFECT.max,
  },
  start: DEFAULT_EFFECT.max,
  step: DEFAULT_EFFECT.step,
  connect: 'lower',
  format: {
    to: function (value) {
      if (Number.isInteger(value)) {
        return value.toFixed(0);
      }
      return value.toFixed(1);
    },
    from: function (value) {
      return parseFloat(value);
    },
  },
});

let selectedEffect = DEFAULT_EFFECT;

const isDefault = () => selectedEffect === DEFAULT_EFFECT;

const updateSlider = () => {
  sliderElement.classList.remove('hidden');
  sliderElement.noUiSlider.updateOptions({
    range: {
      min: selectedEffect.min,
      max: selectedEffect.max,
    },
    step: selectedEffect.step,
    start: selectedEffect.max,
  });

  if (isDefault()) {
    sliderElement.classList.add('hidden');
  }
};

const onSliderUpdate = () => {
  image.style.filter = 'none';
  image.className = '';
  effectLevel.value = '';
  if (isDefault()) {
    return;
  }
  const sliderValue = sliderElement.noUiSlider.get();
  image.style.filter = `${selectedEffect.style}(${sliderValue}${selectedEffect.unit})`;
  image.classList.add(`effects__preview--${selectedEffect.name}`);
  effectLevel.value = sliderValue;
};

const resetEffects = () => {
  selectedEffect = DEFAULT_EFFECT;
  updateSlider();
};

sliderElement.noUiSlider.on('update', onSliderUpdate);

const onFormChange = (evt) => {
  if (!evt.target.classList.contains('effects__radio')) {
    return;
  }
  selectedEffect = EFFECTS.find((effect) => effect.name === evt.target.value);

  updateSlider();
};

export { onFormChange, resetEffects };
