import ajv from '../ajv/index.js';

export default function validate(schema) {
    return function (req, res, next) {
        console.log(req.body, 'This is req body', schema)
        const valid = ajv.validate(schema, req.body);
        if (!valid) {
            const errors = ajv.errors;
            return res.status(400).send(errors);
        }
        next();
    };
}
