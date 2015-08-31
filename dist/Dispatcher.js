'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _flux = require('flux');

var _dispatcher = new _flux.Dispatcher();
var _stores = {};

/**
 * the central store/dispatcher
 * USAGE:
 *   var dispatcher = new Dispatcher();
 *   dispatcher.register('samples', new SampleStore());
 *   dispatcher.subscribe('samples', 'change', function() {});
 *   dispatcher.dispatch({ action: 'createSample', text: 'Hello'});
 */

var Dispatcher = (function () {
    function Dispatcher() {
        _classCallCheck(this, Dispatcher);
    }

    _createClass(Dispatcher, [{
        key: 'register',

        /**
         * registers a specific store and its action creators with the app
         */
        value: function register(name, store) {
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
    }, {
        key: 'subscribe',
        value: function subscribe(name, event, callback) {
            _stores[name].on(event, callback);
        }

        /**
         * unsubscribe from a given event from a given store
         */
    }, {
        key: 'unsubscribe',
        value: function unsubscribe(name, event, callback) {
            _stores[name].removeListener(event, callback);
        }

        /**
         * a direct dispatch function if you want to use it
         */
    }, {
        key: 'dispatch',
        value: function dispatch(action) {
            _dispatcher.dispatch(action);
        }
    }, {
        key: 'get',
        value: function get(storeName, key) {
            if (storeName in _stores == false) return null;
            return _stores[storeName].get(key);
        }
    }]);

    return Dispatcher;
})();

exports['default'] = Dispatcher;
module.exports = exports['default'];