'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _Dispatcher = require('./Dispatcher');

var _Dispatcher2 = _interopRequireDefault(_Dispatcher);

var _netRESTApi = require('./net/RESTApi');

var _netRESTApi2 = _interopRequireDefault(_netRESTApi);

var _storageArrayStore = require('./storage/ArrayStore');

var _storageArrayStore2 = _interopRequireDefault(_storageArrayStore);

var _uiInput = require('./ui/Input');

var _uiInput2 = _interopRequireDefault(_uiInput);

var net = {
    RESTApi: _netRESTApi2['default']
};

var storage = {
    ArrayStore: _storageArrayStore2['default']
};

var ui = {
    Input: _uiInput2['default']
};

exports['default'] = {
    ui: ui,
    net: net,
    storage: storage,
    Dispatcher: _Dispatcher2['default']
};
module.exports = exports['default'];