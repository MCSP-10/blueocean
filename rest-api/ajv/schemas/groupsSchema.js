const postAndDelete = {
    type: 'object',
    properties: {
        email: { type: 'string', format: 'email' },
        group_name: { type: 'string' },
    },
    required: ['email', 'group_name'],
    additionalProperties: false,
};
const update = {
    type: 'object',
    properties: {
        email: { type: 'string', format: 'email' },
        group_name: { type: 'string' },
        oldGroup: { type: 'string' },
    },
    required: ['email', 'group_name', 'oldGroup'],
    additionalProperties: false,
};

export { postAndDelete, update };
