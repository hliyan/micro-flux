'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Schema = (function () {
    function Schema(schema) {
        _classCallCheck(this, Schema);

        this.schema = schema;
        this.validate();
    }

    _createClass(Schema, [{
        key: 'validate',
        value: function validate() {
            if ('name' in this.schema == false || 'singular' in this.schema.name == false) throw "Schema should contain a name";

            if ('plural' in this.schema.name == false) this.schema.name.plural = this.schema.name.singular + 's';

            if ('label' in this.schema == false) this.schema.label = {};

            if ('singular' in this.schema.label == false) this.schema.label.singular = this.schema.name.singular.charAt(0).toUpperCase() + this.schema.name.singular.slice(1);

            if ('plural' in this.schema.label == false) this.schema.label.plural = this.schema.name.plural.charAt(0).toUpperCase() + this.schema.name.plural.slice(1);

            if ('fields' in this.schema == false) throw "Schema should contain fields";
        }
    }]);

    return Schema;
})();

exports['default'] = Schema;
module.exports = exports['default'];