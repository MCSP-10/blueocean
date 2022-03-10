import { Router, json } from 'express';
import { validate, authorization } from '../middleware/index.js';
import { updatesSchema } from '../ajv/index.js';
import updatesController from '../controllers/updatesController.js';

const updates = new Router();
updates.use(json());

updates.post(
    '/',
    authorization,
    validate(updatesSchema.post),
    updatesController.createUpdate
);
updates.patch(
    '/:updateId',
    authorization,
    validate(updatesSchema.update),
    updatesController.patchUpdate
);
updates.delete('/:updateId', authorization, updatesController.deleteUpdate);

export default updates;
