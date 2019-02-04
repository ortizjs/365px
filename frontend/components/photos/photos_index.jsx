import React from 'react';
import PhotoIndexItem from './photos_index_item';
import UploadPhotoFormContainer from './upload_photo_form_container';

class PhotosIndex extends React.Component {
    componentDidMount(){
        this.props.fetchPhotos();
    }

    render() {
        let photos = this.props.photos.reverse().map((photo, i) => {
            return (
                <ul key={i} className="each-photo-ul">
                    <PhotoIndexItem
                        key={photo.id}
                        title={photo.title}
                        photo={photo}
                    />
                </ul>
            );
        });

        return (
            <div className="main-index-content">
                <div className="sub-header">
                    <h1>Recommended photos!!</h1>
                    <h2>Based on your activity</h2>
                </div>
                <div className="photos-index-div">
                    <div className="photo-index-ul">
                        {photos}
                    </div>
                </div>
            </div>
        );
    }
}

export default PhotosIndex;