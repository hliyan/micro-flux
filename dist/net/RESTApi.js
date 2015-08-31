'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

var RESTApi = (function () {
    function RESTApi(host) {
        var baseUrl = arguments.length <= 1 || arguments[1] === undefined ? '' : arguments[1];
        var port = arguments.length <= 2 || arguments[2] === undefined ? 80 : arguments[2];
        var headers = arguments.length <= 3 || arguments[3] === undefined ? null : arguments[3];

        _classCallCheck(this, RESTApi);

        this.setHost(host, baseUrl, port);
        this.headers = headers || {};
    }

    _createClass(RESTApi, [{
        key: 'setHost',
        value: function setHost(host) {
            var baseUrl = arguments.length <= 1 || arguments[1] === undefined ? '' : arguments[1];
            var port = arguments.length <= 2 || arguments[2] === undefined ? 80 : arguments[2];

            this.host = host;
            this.baseUrl = baseUrl;
            this.port = port;
        }
    }, {
        key: 'setHeader',
        value: function setHeader(header, value) {
            if (value) {
                this.headers[header] = value;
            } else {
                if (this.headers[header]) delete this.headers[header];
            }
        }
    }, {
        key: '_options',
        value: function _options(method, path, extraHeaders) {
            var headers = {};
            for (var header in this.headers) {
                headers[header] = this.headers[header];
            }

            if (extraHeaders) {
                for (var header in extraHeaders) {
                    headers[header] = extraHeaders[header];
                }
            }

            var options = {
                hostname: this.host,
                port: this.port,
                path: this.baseUrl + path,
                method: method,
                headers: headers
            };
            return options;
        }
    }, {
        key: 'get',
        value: function get(path) {
            var extraHeaders = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

            var url = this.host + ':' + this.port + this.baseUrl + path;
            return new _bluebird2['default'](function (resolve, reject) {
                var response = {};
                _jquery2['default'].get(url).done(function (data, status, xhr) {
                    response.body = data;
                    response.status = xhr.status;
                    resolve(response);
                }).fail(function (xhr, status, err) {
                    response.status = 0;
                    response.error = err;
                    reject(response);
                });
            });
        }
    }]);

    return RESTApi;
})();

exports['default'] = RESTApi;
module.exports = exports['default'];