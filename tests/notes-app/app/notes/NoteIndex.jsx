import React from 'react';
import Dispatcher from '../Dispatcher';
import NoteList from './NoteList';
import NoteEntry from './NoteEntry';

export default class NoteIndex extends React.Component {  
    constructor(props) {
        super(props);
        this.state = {};
        this.state.notes = Dispatcher.get('notes');
    }

    render() {
        return (
            <div>
                <h1>Notes</h1>
                <NoteEntry />
                <NoteList notes={this.state.notes} />
            </div>
        );
    }
}