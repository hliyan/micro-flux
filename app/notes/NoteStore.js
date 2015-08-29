import ArrayStore from '../../lib/ArrayStore';
import RESTApi from '../../lib/RESTApi';

export default class NoteStore extends ArrayStore {
    constructor() {
        super();
        this.api = new RESTApi('http://demo8238158.mockable.io');
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
            if (res.status == '200') {
                res.body.data.forEach((note) => {
                    this.data.push(note);
                    this.lastKey = (note.key > this.lastKey) ? note.key : this.lastKey;
                });
                this.emit('change');
            } else {
                this.emit('change_fail');
            }
        }).catch((err) => {
            console.log(err);
            this.emit('change_fail');
        });
        this.emit('pending_change');       
    }
}