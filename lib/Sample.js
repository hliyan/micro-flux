import Dispatcher from './Dispatcher';
import ArrayStore from './ArrayStore';

class SampleStore extends ArrayStore {
    createSample(action) {
        this.data.push(action.data);
        this.emit('change');
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



    