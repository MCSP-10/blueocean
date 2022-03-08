import Ajv from 'ajv';
import addFormats from 'ajv-formats';
import registerSchema from './schemas/registerSchema.js';
import loginSchema from './schemas/loginSchema.js';
const ajv = new Ajv({ coerceTypes: true, allErrors: true });
addFormats(ajv);

export { registerSchema, loginSchema };
export default ajv;
