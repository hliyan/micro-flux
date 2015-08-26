import { Dispatcher as FluxDispatcher } from 'flux';

var _dispatcher = new FluxDispatcher();
var _stores = {};

/**
 * the app is the central store/dispatcher
 * USAGE:
 *   import Dispatcher from 'lib/Dispatcher';
 *   import {SampleStore, SampleActions} from 'lib/SampleStore';
 *   Dispatcher.register('samples', SampleStore, SampleActions);
 *   Dispatcher.subscribe('samples', 'change', function() {});
 *   Dispatcher.dispatch({ actionType: 'createSample', text: 'Hello'});
 * The above will fire the subscribed callback function
 */
class Dispatcher {
    /**
     * registers a specific store and its action creators with the app
     */
    register(name, store, actionCreators) {
        // store.onAction should receive all dispatched actions
        if ('onAction' in store == false) {
            throw "Store must implement onAction(action)";
        }
        _dispatcher.register(store.onAction.bind(store));

        // keep the actual store private
        _stores[name] = store;
        
        // mix action creator functions into the app
        if (actionCreators) {
            for (actionName in actionCreators) {
                console.log(actionName);
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

    get(storeName, key) {
        if (storeName in _stores == false)
            return null;
        return _stores[storeName].get(key);
    }
}

export default new Dispatcher();