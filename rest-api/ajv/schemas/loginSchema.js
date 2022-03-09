const loginSchema = {
    type: 'object',
    properties: {
        email: { type: 'string', minLength: 1, format: 'email' },
        password: { type: 'string', minLength: 1 },
    },
    required: ['email', 'password'],
    additionalProperties: false,
};

export default loginSchema;
