import EventEmitter from 'events';
import Dispatcher from './Dispatcher';
import BasicStore from './BasicStore';

class SampleStore extends BasicStore {
    onAction(action) {
        switch(action.actionType) {
            case 'createSample':
                this.create(action.data);
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
        Dispatcher.dispatch({ actionType: 'createSample', data: {text: 'Hello', key: 1}});
        Dispatcher.dispatch({ actionType: 'createSample', data: {text: 'World', key: 2}});
    }
};



    