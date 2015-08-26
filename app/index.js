import React from 'react';
import App from './App';
import Dispatcher from '../lib/Dispatcher';
import { SampleStore  } from '../lib/SampleStore';

Dispatcher.register('samples', SampleStore, null);
Dispatcher.subscribe('samples', 'change', function() {
    console.log('samples changed');
});
Dispatcher.dispatch({ actionType: 'createSample', text: 'Sample'});

React.render(<App />, document.getElementById('app'));