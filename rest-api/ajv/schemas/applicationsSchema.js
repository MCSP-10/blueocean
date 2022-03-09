const applicationSchema = {
    type: 'object',
    properties: {
        user_id: { type: 'number' },
        company: { type: 'string', minLength: 1 },
        job_title: { type: 'string', minLength: 1 },
        deadline: { type: 'string', minLength: 1 },
        post_url: { type: 'string', minLength: 1, format: 'url' },
        description: { type: 'string', minLength: 1 },
        note: { type: 'string', minLength: 1 },
        status: { type: 'string', minLength: 1 },
        salary: { type: 'number', minimum: 0 },
        location: { type: 'string', minLength: 1 },
    },
    required: ['user_id', 'company', 'status'],
    additionalProperties: false,
};

export default applicationSchema;
