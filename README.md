# micro-flux.js

*micro-flux* is a simplified [Flux](https://github.com/facebook/flux) framework for [React.js](https://github.com/facebook/react). It deviates from Facebook's recommendations in a few places, in the interest of helping beginners get started quickly. The framework is still a work in progress.

# Getting started

### How to install

```
npm install micro-flux
```

### How to create a store

miro-flux comes with a simple array store, which you can extend like this:

```javascript
import uflux from 'micro-flux';
var ArrayStore = uflux.storage.ArrayStore;

export default class NoteStore extends ArrayStore {
    // handles the action 'createNote'
    createNote(action) {
        this._insert(action.data);
        this.emit('change');
    }
}
```

### How to use the dispatcher

```javascript
import uflux from 'micro-flux';
var Dispatcher = uflux.Dispatcher;

var dispatcher = new Dispatcher();

// register a store to receive dispatched actions
dispatcher.register('notes', new NoteStore());

// register a callback to receive events from stores
dispatcher.subscribe('notes', 'change', function() {
    console.log('notes changed');
});

// dispatch an event
dispatcher.dispatch({ action: 'createNote', text: 'Hello'});
```


### How to run the sample app

You can find some sample apps at [micro-flux-sample-apps](https://github.com/hliyan/micro-flux-sample-apps). To run the notes app:

```
git clone git@github.com:hliyan/micro-flux-sample-apps.git
cd micro-flux-sample-apps/notes-app
npm install
npm test
http://localhost:8080/webpack-dev-server/
```

# Deviations from Facebook recommendations

- No action creators
- No action constants
- Action names are the same as the handler names in stores
- Instead of using switch statements, store base class internally maps actions to their handlers (by name)

# API documentation

- TODO