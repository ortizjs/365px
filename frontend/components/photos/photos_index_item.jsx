import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const PhotoIndexItem = props => {
    return (
        <div className="photos-index-item-div">
            
            <div className="photo-title">
                {props.title}
            </div>
            <Link to={`/photos/${props.photo.id}`}>
                <img src={props.photo.photo_url} alt="" />   
            </Link>
        </div>
)};

export default withRouter(PhotoIndexItem);