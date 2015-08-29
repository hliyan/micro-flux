import ArrayStore from '../../lib/ArrayStore';
import RESTApi from '../../lib/RESTApi';

export default class NoteStore extends ArrayStore {
    constructor() {
        super();
        this.api = new RESTApi('api.foo.com');
    }

    createNote(action) {
        this.data.push(action.data);
        this.emit('change');
    }

    downloadNotes(action) {
        this.api.get('/notes').then((res) => {
            if (res.code == 200) {
                this.data = res.body.data;
                this.emit('change');
            } else {
                this.emit('error');
            }
        }).catch((err) => {
            this.emit('error');
        });
        this.emit('pending_change');       
    }
}