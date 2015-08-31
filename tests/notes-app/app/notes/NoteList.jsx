import React from 'react';
import Note from './Note';
import Dispatcher from '../Dispatcher';

export default class NoteList extends React.Component {  
    constructor(props) {
        super(props);

        this.onStoreChange = () => {
            this.forceUpdate();
        };
    }

    componentWillMount() {
        Dispatcher.subscribe('notes', 'change', this.onStoreChange);
    }

    componentWillUnmount() {
        Dispatcher.unsubscribe('notes', 'change', this.onStoreChange);
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