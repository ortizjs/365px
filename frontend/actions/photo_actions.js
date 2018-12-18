import * as APIUtil from '../util/photo_api_util';

export const RECEIVE_PHOTOS = 'RECEIVE_BENCHES';
export const RECEIVE_PHOTO = 'RECEIVE_BENCH';
export const REMOVE_PHOTO = 'RECEIVE_BENCH';

export const receivePhotos = (photos) => ({
    type: RECEIVE_PHOTOS,
    photos
});

export const receivePhoto = (photo) => ({
    type: RECEIVE_PHOTO,
    photo
});

export const removePhoto = (id) => ({
    type: REMOVE_PHOTO,
    id
});

export const fetchPhotos = () => dispatch => (
    APIUtil.fetchPhotos().then(photos => dispatch(receivePhotos(photos)))
);

export const fetchPhoto = (id) => dispatch => (
    APIUtil.fetchPhoto(id).then(photo => dispatch(receivePhotos(photo)))
);

export const createPhoto = (photo) => dispatch => (
    APIUtil.createPhoto(photo).then(photo => dispatch(receivePhotos(photo)))
);

export const updatePhoto = (photo) => dispatch => (
    APIUtil.updatePhoto(photo).then(photo => dispatch(receivePhotos(photo)))
);

export const deletePhoto = (photo) => dispatch => (
    APIUtil.deletePhoto(photo).then(id => dispatch(removePhoto(id)))
);

