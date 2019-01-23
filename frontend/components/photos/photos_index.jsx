import React from 'react';
import PhotoIndexItem from './photos_index_item';
import UploadPhotoFormContainer from './upload_photo_form_container';

class PhotosIndex extends React.Component {
    // constructor(props){
    //     super(props);
    //     // this.state = this.props;
    // //     this.state = {
    // //         photos: Object.values(this.props.photos)
    // // };

    // }
    componentDidMount(){
        // debugger
        this.props.fetchPhotos();
    }

    render() {
        // debugger
        let photos = this.props.photos.map( photo => {
            return (
                
                    <ul className="each-photo-ul">
                        {/* <li>{photo.title}</li> */}
                        {/* <img src={photo.photo_url} alt=""/> */}
                        <PhotoIndexItem
                            key={photo.id}
                            title={photo.title}
                            photo={photo}
                            photo_url={photo.photo_url}
                            deletePhoto={this.props.deletePhoto}
                        />
                    </ul>
                
            );
        });

        return (
            <div className="main-index-content">
                <div className="sub-header">
                    <h1>Recommended photos</h1>
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