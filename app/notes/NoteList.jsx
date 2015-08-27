import React from 'react';
import Note from './Note';
import Dispatcher from '../Dispatcher';

export default class NoteList extends React.Component {  
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        Dispatcher.subscribe('notes', 'change', this.onStoreChange.bind(this));
    }

    onStoreChange() {
        this.forceUpdate();
    }

    render() {
        var noteElements = [];
        this.props.notes.forEach(function(note) {
            noteElements.push(<Note key={note.key} text={note.text} />);
        });
        return (
            <div>
                <h3>Notes</h3>
                <ul>{noteElements}</ul>
            </div>
            );
    }
}