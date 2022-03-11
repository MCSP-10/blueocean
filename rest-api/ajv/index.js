import Ajv from 'ajv';
import addFormats from 'ajv-formats';
import registerSchema from './schemas/registerSchema.js';
import loginSchema from './schemas/loginSchema.js';
import * as commentsSchema from './schemas/commentsSchema.js';
import * as applicationsSchema from './schemas/applicationsSchema.js';
import * as updatesSchema from './schemas/updatesSchema.js';
import * as groupsSchema from './schemas/groupsSchema.js';

const ajv = new Ajv({ coerceTypes: true, allErrors: true });
addFormats(ajv);

export {
    registerSchema,
    loginSchema,
    applicationsSchema,
    commentsSchema,
    updatesSchema,
    groupsSchema,
};
export default ajv;
