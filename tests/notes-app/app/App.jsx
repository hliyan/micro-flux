import React from 'react';
import Router from 'react-router';
import Dispatcher from './Dispatcher';

var RouteHandler = Router.RouteHandler;

export default class App extends React.Component {  
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        Dispatcher.dispatch({ action: 'downloadNotes'});
    }

    render() {
        return (
            <div>
                <a href="#/">home</a> <a href="#/notes">notes</a> 
                <RouteHandler/>
            </div>
        );
    }
}