const registerSchema = {
    type: 'object',
    properties: {
        first: { type: 'string', minLength: 1 },
        last: { type: 'string', minLength: 1 },
        email: { type: 'string', minLength: 1, format: 'email' },
        password: { type: 'string', minLength: 1 },
        role: { type: 'string', minLength: 1 },
    },
    required: ['first', 'last', 'email', 'password', 'role'],
    additionalProperties: false,
};

export default registerSchema;
