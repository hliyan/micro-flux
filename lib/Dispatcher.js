import { Dispatcher as FluxDispatcher } from 'flux';

var _dispatcher = new FluxDispatcher();
var _stores = {};

/**
 * the central store/dispatcher
 * USAGE:
 *   var dispatcher = new Dispatcher();
 *   dispatcher.register('samples', new SampleStore());
 *   dispatcher.subscribe('samples', 'change', function() {});
 *   dispatcher.dispatch({ action: 'createSample', text: 'Hello'});
 */
export default class Dispatcher {
    /**
     * registers a specific store and its action creators with the app
     */
    register(name, store) {
        // store.onAction should receive all dispatched actions
        if ('onAction' in store == false) {
            throw "Store must implement onAction(action)";
        }
        _dispatcher.register(store.onAction.bind(store));

        // keep the actual store private
        _stores[name] = store;
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

    get(storeName, key) {
        if (storeName in _stores == false)
            return null;
        return _stores[storeName].get(key);
    }
}