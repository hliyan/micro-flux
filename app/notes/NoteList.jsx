import React from 'react';
import Note from './Note';
import Dispatcher from '../Dispatcher';

export default class NoteList extends React.Component {  
    constructor(props) {
        super(props);
        this.handlers = {};
        this.handlers.onStoreChange = this.onStoreChange.bind(this);
    }

    componentWillMount() {
        Dispatcher.subscribe('notes', 'change', this.handlers.onStoreChange);
    }

    componentWillUnmount() {
        Dispatcher.unsubscribe('notes', 'change', this.handlers.onStoreChange);
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
                <ul>{noteElements}</ul>
            </div>
            );
    }
}