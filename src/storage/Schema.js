export default class Schema {
    constructor(schema) {
        this.schema = schema;
        this.validate();
    }

    validate() {
        if ('name' in this.schema == false || 'singular' in this.schema.name == false)
            throw "Schema should contain a name";

        if ('plural' in this.schema.name == false)
            this.schema.name.plural = this.schema.name.singular + 's';

        if ('label' in this.schema == false)
            this.schema.label = {};

        if ('singular' in this.schema.label == false)
            this.schema.label.singular = this.schema.name.singular.charAt(0).toUpperCase() + this.schema.name.singular.slice(1);

        if ('plural' in this.schema.label == false)
            this.schema.label.plural = this.schema.name.plural.charAt(0).toUpperCase() + this.schema.name.plural.slice(1);

        if ('fields' in this.schema == false)
            throw "Schema should contain fields";
        
    }
}