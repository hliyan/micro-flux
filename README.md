# micro-flux.js

A simplified React/Flux framework for beginners. Still a work in progress.

## How to run the test app

```
git clone git@github.com:hliyan/micro-flux.git
cd micro-flux
npm install
gulp
cd tests/notes-app
npm install
npm start
http://localhost:8080/webpack-dev-server/
```

## Using the dispatcher

```javascript
var dispatcher = new Dispatcher();
dispatcher.register('notes', new NoteStore());
dispatcher.subscribe('notes', 'change', function() {});
dispatcher.dispatch({ action: 'createNote', text: 'Hello'});
```

## Using a store

```javascript
export default class NoteStore extends ArrayStore {
    constructor() {
        super();
    }

    // handles the action 'createNote'
    createNote(action) {
        this._insert(action.data);
        this.emit('change');
    }
}
```