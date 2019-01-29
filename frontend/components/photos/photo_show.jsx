import React from 'react';
import { Link } from 'react-router-dom';

class PhotoShow extends React.Component {
    componentDidMount() {
        let photoId = this.props.match.params.photoId;
        this.props.fetchPhoto(photoId);
    }

    render() {
        if (this.props.photo === undefined) {
            return (
                <div>
                </div>
            )
        } else {
            return (
                <div className="photo-show-main-div">
                    <div className="photo-show-content">
                        <div className="image-div">
                            <img src={props.photo.photo_url} alt="" />
                        </div>
                        <div className="show-page-photo-title">
                            {this.props.photo.title}
                        </div>
                    </div>    
                </div>
            )
        }
    }
}

export default PhotoShow;