import ArrayStore from '../../../../dist/storage/ArrayStore';
import RESTApi from '../../../../dist/net/RESTApi';

export default class NoteStore extends ArrayStore {
    constructor() {
        super();
        this.api = new RESTApi('http://demo8238158.mockable.io');
    }

    createNote(action) {
        this._insert(action.data);
        this.emit('change');
    }

    downloadNotes(action) {
        this.api.get('/notes').then((res) => {
            if (res.status == '200') {
                res.body.data.forEach((note) => {
                    this._insert(note);
                });
                this.emit('change');
            } else {
                this.emit('change_fail');
            }
        }).catch((err) => {
            this.emit('change_fail');
        });
        this.emit('pending_change');       
    }
}