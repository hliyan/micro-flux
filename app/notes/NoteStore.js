import ArrayStore from '../../lib/ArrayStore';
import RESTApi from '../../lib/RESTApi';

export default class NoteStore extends ArrayStore {
    constructor() {
        super();
        this.api = new RESTApi('api.foo.com');
        this.lastKey = 0;
    }

    createNote(action) {
        let note = action.data;
        note.key = ++this.lastKey;
        this.data.push(note);
        this.emit('change');
    }

    downloadNotes(action) {
        this.api.get('/notes').then((res) => {
            if (res.code == 200) {
                res.body.data.forEach((note) => {
                    this.data.push(note);
                    this.lastKey = (note.key > this.lastKey) ? note.key : this.lastKey;
                });
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