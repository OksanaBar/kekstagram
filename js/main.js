import { renderPictures } from './picture.js';
import { getData, sendData } from './api.js';
import { showAlert } from './util.js';
import { onFormSubmit, hideEditorPhoto } from './form.js';
import { showSuccessMessage, showErrorMessage } from './message.js';

const onSendDataSuccess = () => {
  hideEditorPhoto();
  showSuccessMessage();
};

const onSendDataError = () => {
  hideEditorPhoto();
  showErrorMessage();

};

onFormSubmit(async (data) => {
  await sendData(onSendDataSuccess, onSendDataError, data);
});

getData(renderPictures, showAlert);
