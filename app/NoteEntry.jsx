import React from 'react';
import Dispatcher from './Dispatcher';

export default class NoteEntry extends React.Component {  
    constructor(props) {
        super(props);
        this.state = { value: '', lastKey: 1 }
    }

    render() {
        return (
            <div>
                <input type="text" onChange={this.onChangeText.bind(this)} /> <button onClick={this.onEnterNote.bind(this)} >+</button>
            </div>
        );
    }

    onChangeText(e) {
        this.setState({ value: e.target.value });
    }

    onEnterNote(e) {
        this.setState({ lastKey: ++this.state.lastKey });
        Dispatcher.dispatch({ action: 'createNote', data: { key: this.state.lastKey, text: this.state.value } });
    }
}