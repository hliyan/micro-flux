import EventEmitter from 'events';
import Dispatcher from './Dispatcher';
import BasicStore from './BasicStore';

class SampleStore extends BasicStore {
    onAction(action) {
        switch(action.action) {
            case 'createSample':
                this.create(action.data);
                this.emit('change');
            break;
        }   
    }
}

export default {
    run: function() {
        var dispatcher = new Dispatcher();
        dispatcher.register('samples', new SampleStore());
        dispatcher.subscribe('samples', 'change', function() {
            console.log('samples changed');
            console.log(dispatcher.get('samples'));
        });
        dispatcher.dispatch({ action: 'createSample', data: {text: 'Hello', key: 1}});
        dispatcher.dispatch({ action: 'createSample', data: {text: 'World', key: 2}});
    }
};



    