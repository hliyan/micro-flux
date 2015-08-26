import React from 'react';
import App from './App';
import Store from '../lib/Store';
import { SampleStore  } from '../lib/SampleStore';

Store.register('samples', SampleStore, null);
Store.subscribe('samples', 'change', function() {
    console.log('samples changed');
});
Store.dispatch({ actionType: 'createSample', text: 'Sample'});

React.render(<App />, document.getElementById('app'));