import React from 'react';
import Dispatcher from '../Dispatcher';

export default class NoteEntry extends React.Component {  
    constructor(props) {
        super(props);
        this.state = { value: '', lastKey: 1 };

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
        this.setState({ lastKey: ++this.state.lastKey });
        Dispatcher.dispatch({ action: 'createNote', data: { key: this.state.lastKey, text: this.state.value } });
        this.setState({ value: '' });
    }
}