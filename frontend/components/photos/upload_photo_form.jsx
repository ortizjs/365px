import React from 'react';

export default class UploadForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.photo;
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFile = this.handleFile.bind(this);
        // this.state = Object.assign({}, this.props.photo, {photoFile: null});
        // this.state = this.props.photo;
        // debugger
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
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="photo-title"> Title of photo </label>
                <input type="text"
                id="photo-title"
                // value={this.state.title}

                onChange={this.handleInput("title")}/>
                {/* onChange={this.handleInput.bind(this)}/> */}
                
                {/* <label htmlFor="photographer-id"> Photographer Id</label>
                <input type="text"
                id="photographer-id"
                value={this.state.photographerId}
                onChange={this.handleInput("photographerId")}/> */}

                <input type ="file" 
                    onChange={this.handleFile}/>
                <button> Upload a new Photo!</button>
            </form>
        );
    }
}