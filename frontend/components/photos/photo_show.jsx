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
                                    {/* <i class="fal fa-heart"></i> */}
                                    <img className="fa-heart" src="https://img.icons8.com/ios/50/000000/like.png" value="Like"></img>
                                    <img className="fa-plus-square" src="https://img.icons8.com/ios/50/000000/checked-checkbox.png"></img>
                                    {/* <i className="far fa-plus-square"></i> */}
                                    <img className="show-page-dots" src="https://img.icons8.com/ios/50/000000/more.png"></img>
                                </div>
                                <h2 className="photo-show-title">
                                    {this.props.photo.title}
                                </h2>
                                
                                <h3 className="photo-show-by">
                                    By: {this.props.photo.first_name} {this.props.photo.last_name}
                                </h3>

                                <h3 className="photo-show-by">
                                    Location: {this.props.photo.location}
                                </h3>

                                <h3 className="photo-show-by">
                                    Date: {this.props.photo.date_taken}
                                </h3>

                                <h3 className="photo-show-by">
                                    description: {this.props.photo.description}
                                </h3>

                                <h3 className="photo-show-by">
                                    Camera: {this.props.photo.camera}
                                </h3>

                                <h3 className="photo-show-by">
                                    Lens: {this.props.photo.lens} 
                                </h3>

                                <h3 className="photo-show-by">
                                    Length of Lens: {this.props.photo.focal_distance}
                                </h3>

                                <h3 className="photo-show-by">
                                    Aperture: {this.props.photo.aperture}
                                </h3>

                                <h3 className="photo-show-by">
                                    s-speed: {this.props.photo.shatter_speed}
                                </h3>

                                <h3 className="photo-show-by">
                                    ISO: {this.props.photo.iso}
                                </h3>

                                <h3 className="photo-show-by">
                                    Category: {this.props.category}
                                </h3>
                            </div>
                            
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