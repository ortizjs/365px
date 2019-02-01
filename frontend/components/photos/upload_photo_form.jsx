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
        formData.append("photo[photographerId]", this.state.photographerId);
        formData.append("photo[attached_photo]", this.state.photoFile);
        this.props.createPhoto(formData);
    }

    render() {
        console.log(this.state);
        return (
            <form className="photo-upload-form" onSubmit={this.handleSubmit}>
                <label htmlFor="photo-title"> Title of photo </label>
                <input type="text"
                id="photo-title"
                // value={this.state.title}

                onChange={this.handleInput("title")}/>
                
                <input type ="file" 
                    onChange={this.handleFile}/>
                <button onClick={() => this.props.history.go(0)}> Upload a new Photo!</button>
                {/* <button onClick={() => this.props.history.push(`/users/${this.state.photographerId}`)}> Upload a new Photo!</button> */}
            </form>
        );
    }
}

// <form className="photo-upload-form" onSubmit={this.handleSubmit}>
//     <label className="photo-title-label"> Title of photo </label>
//     <input type="text"
//         id="photo-title"
//         className="photo-upload-title"
//         // value={this.state.title}

//         onChange={this.handleInput("title")} />
//     {/* onChange={this.handleInput.bind(this)}/> */}

//     {/* <label htmlFor="photographer-id"> Photographer Id</label>
//                 <input type="text"
//                 id="photographer-id"
//                 value={this.state.photographerId}
//                 onChange={this.handleInput("photographerId")}/> */}

//     <input type="file" className="photo-upload-file"
//         onChange={this.handleFile} />
//     <button onClick={() => this.props.history.go(0)}> Upload a new Photo!</button>
//     {/* <button onClick={() => this.props.history.push(`/users/${this.state.photographerId}`)}> Upload a new Photo!</button> */}
// </form>