import BasicStore from '../lib/BasicStore';

export default class NoteStore extends BasicStore {
    onAction(action) {
        switch(action.action) {
            case 'createNote':
                this.create(action.data);
                this.emit('change');
            break;
        }   
    }
}