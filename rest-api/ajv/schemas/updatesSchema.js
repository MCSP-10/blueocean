const post = {
    type: 'object',
    properties: {
        application_id: { type: 'number' },
        body: { type: 'string' },
    },
    required: ['application_id', 'body'],
    additionalProperties: false,
};

const update = {
    type: 'object',
    properties: {
        application_id: { type: 'number' },
        body: { type: 'string' },
    },
    additionalProperties: false,
};

export { post, update };
