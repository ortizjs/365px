import React from 'react';

export default class UploadForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.photo;
        this.handleSubmit = this.handleSubmit.bind(this);
        // this.state = Object.assign({}, this.props.photo, {photoFile: null});
        // this.state = this.props.photo;
    }

    handleInput(e) {
        this.setState({title: e.currentTarget.value});
    }

    handleFile(e) {
        // debugger
        this.setState({ photoFile: e.currentTarget.files[0]});
    }

    handleSubmit(e) {
        e.preventDefualt();
        let formData = new FormData();
        formData.append("photo[title]")
        this.props.action(this.state);

    }

    render() {
        console.log(this.props);
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="photo-title"> Title of photo</label>
                <input type="text"
                id="photo-title"
                value={this.props.title}
                onChange={this.handleInput.bind(this)}/>
                <input type ="file" 
                    onChange={this.handleFile.bind(this)}/>
                <button> Upload a new Photo!</button>
            </form>
        );
    }
}