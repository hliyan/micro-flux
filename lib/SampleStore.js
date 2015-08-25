import Store from './Store';

export class SampleStore {
    constructor() {
        this.data = [];
    }

    create(text) {
        this.data.push(text);
        return this.data.length - 1;
    }

    find(id) {
        if (typeof id === 'undefined') {
            return this.data;
        } else {
            if ((id < 0) || (id >= this.data.length))
                return null;
            return this.data[id];
        }
    }

    onAction(action) {
        switch(action.actionType) {
            case 'createSample':
                this.create(action.text);
                this.emit('change');
            break;
        }   
    }
}

export class SampleActions {
    createSample(text) {
        Store.dispatch({ actionType: 'createSample', text: text });
    }
}