import { renderPictures } from './picture.js';
import { getData, sendData } from './api.js';
import { showAlert } from './util.js';
import { onFormSubmit, hideEditorPhoto } from './form.js';
import { showSuccessMessage, showErrorMessage } from './message.js';
import { setOnFilterClick, filterImgOn, filterPictures } from './filter.js';

const onGetDataSuccess = (data) => {
  filterImgOn(data);
  renderPictures(filterPictures());
  setOnFilterClick(renderPictures);
};

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

getData(onGetDataSuccess, showAlert);
