import React from 'react';
import Note from './Note';

export default class NoteList extends React.Component {  
    constructor(props) {
        super(props);
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