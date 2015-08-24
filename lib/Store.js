import Dispatcher from 'flux';

var _dispatcher;
var _stores = {};

class Store {
    constructor() {
        _dispatcher = new Dispatcher();
    }

    register(name, store, actions) {
        if ('onAction' in store == false) {
            throw "Store must implement onAction(action)";
        }
        _dispatcher.register(store.onAction.bind(store));
        _stores[name] = store;
        for (actionName in actions) {
            this[actionName] = function(action) {
                var event = _stores[action.storeName].onAction(actions[actionName](action));
                if (event)
                    store.emit(event);
            };
        }
    }

    listen(name, event, callback) {
        _stores[name].on(event, callback);
    }

    removeListener(name, event, callback) {
        _stores[name].removeListener(event, callback);
    }
}

export default new Store();