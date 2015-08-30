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
            required: true,
            length: {
                min: 0,
                max: 100
            }
        }
    }
};

