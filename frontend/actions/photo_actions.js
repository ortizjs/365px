import * as PhotoAPIUtil from '../util/photo_api_util';

export const RECEIVE_PHOTOS = 'RECEIVE_PHOTOS';
export const RECEIVE_PHOTO = 'RECEIVE_PHOTO';
export const REMOVE_PHOTO = 'REMOVE_PHOTO';

export const receivePhotos = (photos) => ({
    type: RECEIVE_PHOTOS,
    photos: photos
});

export const receivePhoto = (photo) => ({
    type: RECEIVE_PHOTO,
    photo: photo
});
export const receiveUser = (user) => ({
    type: RECEIVE_USER,
    user: user
});

export const removePhoto = (photoId) => ({
    type: REMOVE_PHOTO,
    id: photoId
});

export const fetchPhotos = () => dispatch => (
    PhotoAPIUtil.fetchPhotos().then(photos => dispatch(receivePhotos(photos)))
);

// export const fetchUser = (id) => dispatch => (
//     PhotoAPIUtil.fetchUser(id).then(user => dispatch(receiveUser(user)))
// );

export const fetchPhoto = (id) => dispatch => (
    PhotoAPIUtil.fetchPhoto(id).then(photo => dispatch(receivePhoto(photo)))
);

export const createPhoto = (photo) => dispatch => (
    PhotoAPIUtil.createPhoto(photo).then(photo => dispatch(receivePhoto(photo)))
);

export const updatePhoto = (photo) => dispatch => (
    PhotoAPIUtil.updatePhoto(photo).then(photo => dispatch(receivePhoto(photo)))
);

export const deletePhoto = (id) => dispatch => (
    PhotoAPIUtil.deletePhoto(id).then(id => dispatch(removePhoto(id)))
);


