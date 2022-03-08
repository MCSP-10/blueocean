import Ajv from 'ajv';
import addFormats from 'ajv-formats';
import userSchema from './schemas/userSchema.js';
const ajv = new Ajv({ coerceTypes: true, allErrors: true });
addFormats(ajv);

export { userSchema };
export default ajv;
