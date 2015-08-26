import EventEmitter from 'events';

export default class BasicStore extends EventEmitter {
    constructor() {
        super();
        this.data = [];
    }

    create(data) {
        this.data.push(data);
    }

    get(key) {
        if (typeof key === 'undefined') {
            return this.data;
        } else {
            for (let i = 0; i < this.data.length; i++) {
                if (this.data[i].key == key)
                    return this.data[i];
            }
            return null;
        }
    }

    onAction(action) {
        throw "onAction not implemented";  
    }
}