import React from 'react';
import Dispatcher from './Dispatcher';
import NoteList from './NoteList';

export default class App extends React.Component {  
    constructor(props) {
        super(props);
        this.state = {};
        this.state.notes = Dispatcher.get('notes');
        Dispatcher.dispatch({ action: 'createNote', data: { key: 1, text: 'Sample Note'} });
    }

    render() {
        return (
            <div>
                <h1>Hello</h1>
                <NoteList notes={this.state.notes} />
            </div>
            );
    }
}