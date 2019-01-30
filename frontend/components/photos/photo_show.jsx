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
                            <img className="photo-show-image" src={this.props.photo.photo_url} alt="" />
                        </div>
                        <div className="show-page-photo-info">
                            <h2>
                                {this.props.photo.title}
                            </h2>
                            <h3>
                                By: {this.props.photo.first_name} {this.props.photo.last_name}
                            </h3>
                        </div>
                        <div className="photo-by-div">
                            {/* <h3>
                                By: {this.props.photo.first_name} {this.props.photo.last_name}
                            </h3> */}
                        </div>
                        <div className="show-return-button">
                            <button onClick={() => this.props.history.push("/users")}> Close </button>
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