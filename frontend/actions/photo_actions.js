import * as PhotoAPIUtil from '../util/photo_api_util';

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
    PhotoAPIUtil.fetchPhotos().then(photos => dispatch(receivePhotos(photos)))
);

export const fetchPhoto = (id) => dispatch => (
    PhotoAPIUtil.fetchPhoto(id).then(photo => dispatch(receivePhotos(photo)))
);

export const createPhoto = (photo) => dispatch => (
    PhotoAPIUtil.createPhoto(photo).then(photo => dispatch(receivePhotos(photo)))
);

export const updatePhoto = (photo) => dispatch => (
    PhotoAPIUtil.updatePhoto(photo).then(photo => dispatch(receivePhotos(photo)))
);

export const deletePhoto = (id) => dispatch => (
    PhotoAPIUtil.deletePhoto(id).then(photo => dispatch(removePhoto()))
);

