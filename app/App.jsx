import React from 'react';

export default class App extends React.Component {  
    constructor(props) {
        super(props);
        this.state = {who: 'World'};
    }

    render() {
        return (
            <div>
                <h1>Hello {this.state.who} </h1>
            </div>
            );
    }
}