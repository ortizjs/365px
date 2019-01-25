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
           console.log(parseInt(user_id), photo.photographer_id);
            if (photo.photographer_id === parseInt(user_id)) {
               delet = <button onClick={() => deletePhoto(photo.id).then(() => that.props.history.go(0))}> Delete </button>
           }
           return (
               <div key={i} className="user-photos-container-div">
                   <ul className="each-photo-ul">
                        <div className = "photos-index-item-div" >
                            <div className="photo-title">
                                {photo.title}
                            </div>
                            <img src={photo.photo_url} width="100px" height="100px" alt="" />
                            {delet}
                            </div >
                   </ul>
               </div>
           )
        });
        return photos
    }

    render() {
        // let user_id = this.props.user_id;
        // let photos = this.props.photos.reverse().map(photo => {
            // if (photo.photographer_id === user_id) {
                // return (
                    // <div className="user-photos-container-div">
                        {/* // <ul className="each-photo-ul"> */}
                            {/* <li>{photo.title}</li> */}
                            {/* <img src={photo.photo_url} alt=""/> */}
                            {/* <PhotoIndexItem
                                key={photo.id}
                                title={photo.title}
                                photo={photo}
                                photo_url={photo.photo_url}
                                deletePhoto={this.props.deletePhoto}
                            /> */}
                        {/* </ul> */}
                    {/* </div> */}
                // );
            // }
        // });

        return (
            <div className="main-index-content">
                <div className="sub-header">
                    <h1>All the photos uploaded by you!</h1>
                    <h2>Most recent to least. Be proud of your work!</h2>
                </div>
                <div className="photos-index-div">

                    <ul className="photo-index-ul">
                        {/* {photos} */}
                        {this.showUserPhotos.bind(this)()}
                    </ul>
                </div>
            </div>
        );
    }
}

export default UserPhotos;