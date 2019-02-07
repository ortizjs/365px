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
                        <div className="show-return-button">
                            <button onClick={() => this.props.history.push("/users")}> x </button>
                        </div>
                        <div className="image-div">
                            <img className="photo-show-image" src={this.props.photo.photo_url} alt="" height="500px" width="500px"/>
                        </div>
                            
                        <div className="show-page-photo-info">
                            <div className="show-page-photo-info-inner">
                                <div className="show-page-image-icons" >
                                    <img className="fa-heart" src="https://img.icons8.com/ios/50/000000/like.png" value="Like"></img>
                                    <img className="fa-plus-square" src="https://img.icons8.com/ios/50/000000/checked-checkbox.png"></img>
                                    <img className="show-page-dots" src="https://img.icons8.com/ios/50/000000/more.png"></img>
                                </div>
                                <div className="photo-show-detail-one">
                                    <h2 className="photo-show-title">
                                        {this.props.photo.title}
                                    </h2>
                                    
                                    <h3 className="photo-show-by">
                                        By: {this.props.photo.first_name} {this.props.photo.last_name}
                                    </h3>
                                </div>

                                <div className="photo-show-detail-two">
                                    <img className="fa-location-marker" src="https://img.icons8.com/ios/50/000000/marker.png" value="Location"></img>
                                    <h3 className="photo-show-location">
                                        {this.props.photo.location}
                                    </h3>
                                    <img className="fa-calendar" src="https://img.icons8.com/ios/50/000000/calendar.png" value="calendar"></img>
                                    <h3 className="photo-show-upload-date">
                                        {this.props.photo.date_taken}
                                    </h3>
                                </div>

                                <div className="photo-show-detail-three">
                                    <h3 className="photo-show-detail">
                                        {this.props.photo.description}
                                    </h3>
                                </div>

                                <div className="photo-show-detail-four">
                                    <img className="fa-camera" src="https://img.icons8.com/ios/50/000000/unsplash.png" value="camera"></img>
                                    <h3 className="photo-show-detail">
                                        {this.props.photo.camera}
                                    </h3>
                                </div>
                                <div className="photo-show-detail-five">
                                    <img className="fa-lens" src="https://img.icons8.com/ios/50/000000/large-lens.png"></img>
                                    <h3 className="photo-show-lens">
                                        {this.props.photo.lens} 
                                    </h3>
                                </div>
                                <div className="photo-show-detail-six">
                                    <img className="fa-slider" src="https://img.icons8.com/ios/50/000000/sorting-options.png"></img>
                                    <h3 className="photo-show-detail">
                                        {this.props.photo.focal_distance}
                                    </h3>
                                    <br/>
                                    <h3 className="photo-show-aperture">
                                        Aperture: {this.props.photo.aperture}
                                    </h3>

                                    <h3 className="photo-show-f-speed">
                                        F-speed: {this.props.photo.shatter_speed}
                                    </h3>

                                    <h3 className="photo-show-iso">
                                        ISO: {this.props.photo.iso}
                                    </h3>
                                </div>

                                <div className="photo-show-detail-seven">
                                    <h3 className="photo-show-detail">
                                        Category: {this.props.photo.category}
                                    </h3>
                                </div>
                            </div>
                            
                        </div>
                        <div className="photo-show-footer">

                        </div>
                        {/* <div className="photo-by-div"> */}
                            {/* <h3>
                                By: {this.props.photo.first_name} {this.props.photo.last_name}
                            </h3> */}
                        {/* </div> */}
                    </div>    
                </div>
            )
        }
    }
}

export default PhotoShow;