import React from 'react';
import Dispatcher from '../Dispatcher';

export default class NoteEntry extends React.Component {  
    constructor(props) {
        super(props);
        this.state = { value: ''};

        this.onChangeText = (e) => {
            this.setState({ value: e.target.value });
        };

        this.onAddButton = (e) => {
            this.createNote();
        };
    }

    render() {
        return (
            <div>
                <input type="text" value={this.state.value} onChange={this.onChangeText} /> <button onClick={this.onAddButton} >+</button>
            </div>
        );
    }

    createNote() {
        Dispatcher.dispatch({ action: 'createNote', data: { text: this.state.value } });
        this.setState({ value: '' });
    }
}