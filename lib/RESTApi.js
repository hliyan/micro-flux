import $ from 'jquery';
import Promise from 'bluebird';

export default class RESTApi {
    constructor(host, baseUrl = '', port = 80, headers = null) {
        this.setHost(host, baseUrl, port);
        this.headers = headers || {};
    }

    setHost(host, baseUrl = '', port = 80) {
        this.host = host;
        this.baseUrl = baseUrl;
        this.port = port;
    }

    setHeader(header, value) {
        if (value) {
            this.headers[header] = value;
        } else {
            if (this.headers[header])
                delete this.headers[header];
        }
    }

    _options(method, path, extraHeaders) {
        let headers = {};
        for (let header in this.headers) {
            headers[header] = this.headers[header];
        }

        if (extraHeaders) {
            for (let header in extraHeaders) {
                headers[header] = extraHeaders[header];
            }
        }

        let options = {
            hostname: this.host,
            port: this.port,
            path: this.baseUrl + path,
            method: method,
            headers: headers
        };
        return options;
    }

    get(path, extraHeaders = null) {
        return new Promise(function(resolve, reject) {
            setTimeout(() => {
                let response = {};
                response.code = 200;
                response.body = {
                  "data": [
                    { "key": "1", "text": "Hello" },
                    { "key": "2", "text": "World" }
                  ]
                };
                resolve(response);
            }, 1000);
        });
    }
}