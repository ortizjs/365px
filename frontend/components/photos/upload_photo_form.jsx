import React from 'react';

export default class UploadForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            photographer_id: ""
        };
    }

    handleInput(e) {
        this.setState({title: e.currentTarget.value});
    }

    handleSubmit(e) {

    }

    render() {
        return (
            <form onSubmit={history.handleSubmit.bind(this)}>
                <label htmlFor="photo-title"> Title of photo</label>
                <input type="text"
                id="photo-title"
                value={this.state.title}
                onChange={this.handleInput.bind(this)}/>
                <button> Upload a new Photo!</button>
            </form>
        );
    }
}