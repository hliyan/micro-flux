import EventEmitter from 'events';
import Dispatcher from './Dispatcher';

class SampleStore extends EventEmitter {
    constructor() {
        super();
        this.data = [];
    }

    create(text) {
        this.data.push(text);
        return this.data.length - 1;
    }

    get(id) {
        if (typeof id === 'undefined') {
            return this.data;
        } else {
            if ((id < 0) || (id >= this.data.length))
                return null;
            return this.data[id];
        }
    }

    onAction(action) {
        switch(action.actionType) {
            case 'createSample':
                this.create(action.text);
                this.emit('change');
            break;
        }   
    }
}

export default {
    run: function() {
        Dispatcher.register('samples', new SampleStore());
        Dispatcher.subscribe('samples', 'change', function() {
            console.log('samples changed');
            console.log(Dispatcher.get('samples'));
        });
        Dispatcher.dispatch({ actionType: 'createSample', text: 'Hello'});
        Dispatcher.dispatch({ actionType: 'createSample', text: 'World'});
    }
};



    