const applicationSchema = {
    type: 'object',
    properties: {
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
    required: ['company', 'status', 'job_title'],
    additionalProperties: false,
};

export default applicationSchema;