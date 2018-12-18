import React from 'react';
import PhotoIndexItem from './photos_index_item';
import UploadPhotoFormContainer from './upload_post_form_container';

class PhotoIndex extends React.Component {
    componentDidMount(){
        this.props.fetchPhotos();
    }

    render() {
        let photos = this.props.photos.map( photo => {
            return (
                <PhotoIndexItem 
                key={photo.id}
                photo={photo}
                editPhoto={this.props.editPhoto}
                deletePhoto={this.props.deletePhoto}
                />
            )
        });
        return (
            <div>
                <ul>
                    {photos}
                </ul>
            </div>
        );
    }
}

export default PhotoIndex;