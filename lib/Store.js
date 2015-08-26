import Dispatcher from 'flux';

var _dispatcher;
var _stores = {};

/**
 * the central store/dispatcher
 * USAGE:
 *   import Store from 'lib/Store';
 *   import {SampleStore, SampleActions} from 'lib/SampleStore';
 *   Store.register('samples', SampleStore, SampleActions);
 *   Store.subscribe('samples', 'change', function() {});
 *   Store.createSample('This is a sample'); // function imported from SampleActions
 * The above will fire the subscribed callback function
 */
class Store {
    /**
     * private, do not use
     */
    constructor() {
        _dispatcher = new Dispatcher();
    }

    /**
     * registers a specific store and its action creators with the
     * central store/dispatcher
     */
    register(name, store, actionCreators) {
        // store.onAction should receive all dispatched actions
        if ('onAction' in store == false) {
            throw "Store must implement onAction(action)";
        }
        _dispatcher.register(store.onAction.bind(store));

        // keep the actual store private
        _stores[name] = store;
        
        // mix action creator functions into the Store
        if (actionCreators) {
            for (actionName in actionCreators) {
                this[actionName] = actionCreators[actionName];
            }
        }
    }

    /**
     * subscribe to a given event from a given store
     */ 
    subscribe(name, event, callback) {
        _stores[name].on(event, callback);
    }

    /**
     * unsubscribe from a given event from a given store
     */ 
    unsubscribe(name, event, callback) {
        _stores[name].removeListener(event, callback);
    }

    /**
     * a direct dispatch function if you want to use it
     */
    dispatch(action) {
        _dispatcher.dispatch(action);
    }
}

export default new Store();