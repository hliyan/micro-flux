import Dispatcher from '../../../dist/Dispatcher';
import NoteStore from './notes/NoteStore';

class AppDispatcher extends Dispatcher {
    constructor() {
        super();
        this.register('notes', new NoteStore());
    }
}

export default new AppDispatcher();