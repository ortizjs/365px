import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import PhotoIndexItem from './photos_index_item';

class UserPhotos extends React.Component {

    componentDidMount() {
        this.props.fetchPhotos();    
    }

    showUserPhotos() {
        let photos = this.props.photos.reverse().map((photo, i) => {
           let user_id = this.props.user_id;
           let deletePhoto = this.props.deletePhoto;
           let that = this;
           let delet = "";
        //    console.log(photo.photographer_id, user_id);
            if (photo.photographer_id === parseInt(user_id)) {
            //    delet = <button className="photo-show-delete-button" onClick={() => deletePhoto(photo.id).then(() => that.props.history.go(0))}> Delete </button>
               delet = <button className="photo-show-delete-button" onClick={() => deletePhoto(photo.id).then(() => that.props.history.go(0))}>
                <i className="fas fa-trash-alt"></i>
               </button>
           }
           return (
            //    <div key={i} className="user-photos-container-div">
             <ul key={i} className="each-photo-ul"> 
                <div className="photos-index-item-div" >
                    <div className="photo-title">
                        {photo.title}
                    </div>
                       <Link to={`/photos/${photo.id}`}>
                            <img src={photo.photo_url} width="100px" height="100px" alt="" />
                       </Link>
                        {delet}
                </div >
            </ul>
               /* </div> */
           )
        });
        return photos
    }

    render() {
        return (
            <div className="main-index-content">
                <div className="sub-header">
                    <h1>All the photos uploaded by you!</h1>
                    <h2>Most recent to least. Be proud of your work!</h2>
                </div>
                <div className="photos-index-div">
                    <ul className="photo-index-ul">
                        {this.showUserPhotos.bind(this)()}
                    </ul>
                </div>
            </div>
        );
    }
}

export default UserPhotos;