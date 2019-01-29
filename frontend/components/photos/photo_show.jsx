import React from 'react';
import { Link } from 'react-router-dom';

class PhotoShow extends React.Component {
    componentDidMount() {
        let photoId = this.props.match.params.photoId;
        this.props.fetchPhoto(photoId);
    }
    
    render() {
        // console.log(this.props.photos);
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
                            <img src={this.props.photo.photo_url} alt="" />
                        </div>
                        <div className="show-page-photo-title">
                            <h2>
                                {this.props.photo.title}
                            </h2>
                        </div>
                        <div className="photo-by-div">
                            <h3>
                                By: 
                            </h3>
                        </div>
                        <div className="show-return-button">
                            <button onClick={() => this.props.history.push("/users")}> Go back </button>
                            {/* <button onClick={() => deletePhoto(photo.id).then(() => that.props.history.go(0))}> Delete </button> */}
                            {/* <Link to="/users">Go Back</Link> */}
                        </div>
                    </div>    
                </div>
            )
        }
    }
}

export default PhotoShow;