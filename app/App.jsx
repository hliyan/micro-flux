import React from 'react';
import Dispatcher from './Dispatcher';
import NoteIndex from './NoteIndex';

export default class App extends React.Component {  
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <NoteIndex />
            </div>
        );
    }
}