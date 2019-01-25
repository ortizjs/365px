import React from 'react';
import { Link, withRouter } from 'react-router-dom';

// class PhotoIndexItem extends React.Coponent {
//     constructor(props){
//         super(props);
//         this.state = this.props;
//         this.handleDelete = this.handleDelete.bind(this);
//         // debugger
//     }

//     handleDelete() {
//         this.state.deletePhoto(this.state.photo.id).then(() => props.history.push('/users'));
//     }

//     render() {
//         return (
//             <div className="photos-index-item-div">
                
//                 <div className="photo-title">
//                     {props.title}
//                 </div>
//                 <img src={props.photo.photo_url} width="100px" height="100px" alt="" />   
//                 {/* <Link to={`api/photos/${props.photo.id}`}>{props.post.title}</Link> */}
//                 {/* <Link to={`api/photos/${props.post.id}/edit`}>Edit {props.post.title}</Link> */}
//                 {/* <button onClick={props.editPhoto(props.photo.id)}>Edit</button> */}
//                 <button onClick={this.handleDelete}>Delete</button>
//             </div>
//         )
//     }
// };


const PhotoIndexItem = props => {
    // debugger
    // let deteleOpt = 
    return (
    <div className="photos-index-item-div">
        
        <div className="photo-title">
            {props.title}
        </div>
        <img src={props.photo.photo_url} width="100px" height="100px" alt="" />   
        {/* <Link to={`api/photos/${props.photo.id}`}>{props.post.title}</Link> */}
        {/* <Link to={`api/photos/${props.post.id}/edit`}>Edit {props.post.title}</Link> */}
        {/* <button onClick={props.editPhoto(props.photo.id)}>Edit</button> */}
        {/* <button onClick={() => props.deletePhoto(props.photo.id).then(() => props.history.go(0))}>Delete</button> */}
    </div>
)};

export default withRouter(PhotoIndexItem);