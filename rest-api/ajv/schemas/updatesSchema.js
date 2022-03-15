const post = {
    type: 'object',
    properties: {
        application_id: { type: 'number' },
        body: { type: 'string' },
        timestamp: { type: 'string', minLength: 1 },
    },
    required: ['application_id', 'body', 'timestamp'],
    additionalProperties: false,
};

const update = {
    type: 'object',
    properties: {
        application_id: { type: 'number' },
        body: { type: 'string' },
        timestamp: { type: 'string', minLength: 1 },
    },
    additionalProperties: false,
};

export { post, update };
