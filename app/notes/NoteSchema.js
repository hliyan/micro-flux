export default {
    name: {
        singular: 'note',
        plural: 'notes'
    },
    label: {
        singular: 'Note',
        plural: 'Notes'
    },
    fields: {
        text: {
            type: 'text',
            label: 'Note',
            length: {
                min: 0,
                max: 100
            }
        }
    }
};

