'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _events = require('events');

var _events2 = _interopRequireDefault(_events);

var ArrayStore = (function (_EventEmitter) {
    _inherits(ArrayStore, _EventEmitter);

    function ArrayStore() {
        _classCallCheck(this, ArrayStore);

        _get(Object.getPrototypeOf(ArrayStore.prototype), 'constructor', this).call(this);
        this.data = [];
    }

    _createClass(ArrayStore, [{
        key: 'get',
        value: function get(key) {
            if (typeof key === 'undefined') {
                return this.data;
            } else {
                for (var i = 0; i < this.data.length; i++) {
                    if (this.data[i].key == key) return this.data[i];
                }
                return null;
            }
        }
    }, {
        key: 'onAction',
        value: function onAction(action) {
            if (action.action in this) {
                var handleAction = this[action.action].bind(this);
                handleAction(action);
            }
        }
    }, {
        key: '_generateKey',
        value: function _generateKey() {
            if ('nextKey' in this == false) this.nextKey = 1;
            return this.nextKey++;
        }
    }, {
        key: '_insert',
        value: function _insert(record) {
            if ('key' in record == false) record.key = this._generateKey();
            this.data.push(record);
        }
    }]);

    return ArrayStore;
})(_events2['default']);

exports['default'] = ArrayStore;
module.exports = exports['default'];