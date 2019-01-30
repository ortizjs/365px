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
                                {/* <div className="show-return-button"> */}
                                {/* <button onClick={() => this.props.history.push("/users")}> Close </button> */}
                                {/* <button onClick={() => deletePhoto(photo.id).then(() => that.props.history.go(0))}> Delete </button> */}
                                {/* <Link to="/users">Go Back</Link> */}
                                {/* </div> */}
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