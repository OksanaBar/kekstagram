import {getRandomArrayElement, getRandomPositiveInteger} from './util.js';

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

const MIN_AVATAR = 1;
const MAX_AVATAR = 6;

let lastUsedIdComment = 1;

const createCommentPhoto = () => ({
  idComment: lastUsedIdComment++,
  avatar: `img/avatar-${getRandomPositiveInteger(MIN_AVATAR, MAX_AVATAR)}.svg`,
  message: getRandomArrayElement(COMMENT_TEXT),
  name: getRandomArrayElement(NAME),
});

export {createCommentPhoto};
