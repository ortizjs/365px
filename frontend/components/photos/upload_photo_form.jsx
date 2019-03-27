import React from 'react';

export default class UploadForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.photo;
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFile = this.handleFile.bind(this);
        let user_id = this.state.photographer_id;
    }

    handleInput(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleFile(e) {
        this.setState({ photoFile: e.currentTarget.files[0]});
        
    }

    handleSubmit(e) {
        e.preventDefault();
        let formData = new FormData();
        formData.append("photo[title]", this.state.title);
        formData.append("photo[category]", this.state.category);
        formData.append("photo[description]", this.state.description);
        formData.append("photo[camera]", this.state.camera);
        formData.append("photo[lens]", this.state.lens);
        formData.append("photo[date_taken]", this.state.date_taken);
        formData.append("photo[iso]", this.state.iso);
        formData.append("photo[focal_distance]", this.state.focal_distance);
        formData.append("photo[shatter_speed]", this.state.shatter_speed);
        formData.append("photo[aperture]", this.state.aperture);
        formData.append("photo[location]", this.state.location);
        formData.append("photo[photographer_id]", this.state.photographerId);
        formData.append("photo[attached_photo]", this.state.photoFile);
        this.props.createPhoto(formData).then(() => this.props.history.go(0));
    }

    render() {
        // console.log(this.state);
        return (
            <div className="photo-upload-form-div">
                <div className="file-select-div">
                    <label className="file-upload-container-label"> Select a file!
                            <input type="file" className="photo-upload-file"
                            onChange={this.handleFile} />
                    </label>
                </div> 
                <form className="photo-upload-form" onSubmit={this.handleSubmit}>
                    {/* <label htmlFor="photo-title" className="photo-title-label" > Title of photo </label> */}
                    <button className="upload-photo-button" type="submit"> Upload a new Photo!</button>
                    {/* <button className="upload-photo-button" onClick={() => this.props.history.go(0)}> Upload a new Photo!</button> */}
                    <input placeholder="Title" type="text"
                        className="photo-upload-title"
                                                                                            onChange={this.handleInput("title")}/>
                    <input placeholder="Location" type="text"
                        className="photo-upload-location-format"
                        onChange={this.handleInput("location")}/>

                    <input placeholder="Date Taken" type="date"
                        className="photo-upload-date-format"
                        onChange={this.handleInput("date_taken")}/>

                    <input placeholder="Description" type="text"
                        className="photo-upload-field-format"
                        onChange={this.handleInput("description")}/>

                    <input placeholder="Camera" type="text"
                        className="photo-upload-field-format"
                        onChange={this.handleInput("camera")}/>

                    <input placeholder="Lens" type="text"
                        className="photo-upload-field-format"
                        onChange={this.handleInput("lens")}/>

                    <input placeholder="Length of Lens" type="text"
                        className="photo-upload-field-format"
                        onChange={this.handleInput("focal_distance")}/>

                    <input placeholder="Aperture/F-number" type="text"
                        className="photo-upload-field-format"
                        onChange={this.handleInput("aperture")}/>

                    <input placeholder="Shatter Speed" type="text"
                        className="photo-upload-field-format"
                        onChange={this.handleInput("shatter_speed")}/>

                    <input placeholder="ISO" type="text"
                        className="photo-upload-field-format"
                        onChange={this.handleInput("iso")}/>
                    
                    <input placeholder="Category" type="text"
                        className="photo-upload-field-format"
                        onChange={this.handleInput("category")}/>
    
                    {/* <label className="file-upload-container-label"> Select a file!
                        <input type="file" className="photo-upload-file"
                            onChange={this.handleFile}/>
                    </label> */}
                    
                </form>
            </div>
        );
    }
}


// return (
//     <form className="photo-upload-form" onSubmit={this.handleSubmit}>
//         {/* <label htmlFor="photo-title" className="photo-title-label" > Title of photo </label> */}
//         <input placeholder="Title" type="text"
//             className="photo-upload-title"
//             onChange={this.handleInput("title")} />
//         <input placeholder="Location" type="text"
//             className="photo-upload-locationphoto-upload-field-format"
//             onChange={this.handleInput("location")} />

//         <input placeholder="Date Taken" type="date"
//             className="photo-upload-date-format"
//             onChange={this.handleInput("date_taken")} />

//         <input placeholder="Description" type="text"
//             className="photo-upload-field-format"
//             onChange={this.handleInput("description")} />

//         <input placeholder="Camera" type="text"
//             className="photo-upload-field-format"
//             onChange={this.handleInput("camera")} />

//         <input placeholder="Lens" type="text"
//             className="photo-upload-field-format"
//             onChange={this.handleInput("lens")} />

//         <input placeholder="Length of Lens" type="text"
//             className="photo-upload-field-format"
//             onChange={this.handleInput("focal_distance")} />

//         <input placeholder="Aperture/F-number" type="text"
//             className="photo-upload-field-format"
//             onChange={this.handleInput("aperture")} />

//         <input placeholder="Shatter Speed" type="text"
//             className="photo-upload-field-format"
//             onChange={this.handleInput("shatter_speed")} />

//         <input placeholder="ISO" type="text"
//             className="photo-upload-field-format"
//             onChange={this.handleInput("iso")} />

//         <input placeholder="Category" type="text"
//             className="photo-upload-field-format"
//             onChange={this.handleInput("category")} />

//         <label className="file-upload-container-label"> Select a file!
//                     <input type="file" className="photo-upload-file"
//                 onChange={this.handleFile} />
//         </label>
//         <button className="upload-photo-button" onClick={() => this.props.history.go(0)}> Upload a new Photo!</button>
//     </form>
// );



//Additional commnets to follow if neccessary