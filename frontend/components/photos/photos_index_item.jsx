import React from 'react';
import { Link } from 'react-router-dom';

const PhotoIndexItem = props => (
    <div className="photos-index-item-div">
        
        <div className="photo-title">
            {props.title}
        </div>
        <img src={props.photo.photo_url} width="100px" height="100px" alt="" />   
        {/* <Link to={`api/photos/${props.photo.id}`}>{props.post.title}</Link> */}
        {/* <Link to={`api/photos/${props.post.id}/edit`}>Edit {props.post.title}</Link> */}
        {/* <button onClick={props.editPhoto(props.photo.id)}>Edit</button> */}
        {/* <button onClick={props.deletePhoto(props.photo.id)}>Delete</button> */}
    </div>
);

export default PhotoIndexItem;