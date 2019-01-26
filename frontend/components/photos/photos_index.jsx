import React from 'react';
import PhotoIndexItem from './photos_index_item';
import UploadPhotoFormContainer from './upload_photo_form_container';

class PhotosIndex extends React.Component {
    componentDidMount(){
        this.props.fetchPhotos();
    }

    render() {
        // debugger
        let photos = this.props.photos.reverse().map((photo, i) => {
            // if (photo.photographer_id === user_id){
            return (
                    <ul key={i} className="each-photo-ul">
                        <PhotoIndexItem
                            key={photo.id}
                            title={photo.title}
                            photo={photo}
                        />
                  </ul>
                );
            // }
        });

        return (
            <div className="main-index-content">
                <div className="sub-header">
                    <h1>Recommended photos!!</h1>
                    <h2>Based on your activity</h2>
                </div>
                <div className="photos-index-div">
                    <ul className="photo-index-ul">
                        {photos}
                    </ul>
                </div>
            </div>
        );
    }
}

export default PhotosIndex;