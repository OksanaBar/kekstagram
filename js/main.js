// import {createDescriptionPhotos} from './data.js';
import {renderPictures} from './picture.js';
import { getData, sendData } from './api.js';
import { showAlert } from './util.js';
import { onFormSubmit, hideEditorPhoto } from './form.js';

// renderPictures(createDescriptionPhotos());

const onSendDataSuccess = () => {
  hideEditorPhoto();
//  showSuccessMessage();
};

const onSendDataError = () => {
//  showErrorMessage();
};

onFormSubmit(async (data) => {
  await sendData(onSendDataSuccess, onSendDataError, data);
});

getData(renderPictures, showAlert);
