import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import PhotoIndexItem from './photos_index_item';

class UserPhotosIndex extends React.Component {

    componentDidMount() {
        this.props.fetchPosts();    
    }

    render() {
        let user_id = this.props.user_id;
        // debugger
        let photos = this.props.photos.map(photo => {
            // debugger
            if (photo.photographer_id === user_id) {
                return (
                    <div className="user-photos-container-div">
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
                    </div>
                );
            }
        });

        return (
            <div className="main-index-content">
                <div className="sub-header">
                    <h1>All the photos uploaded by you!</h1>
                    <h2>Most recent to leasy. Be proud of your work!</h2>
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