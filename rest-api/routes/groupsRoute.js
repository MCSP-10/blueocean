import { Router, json } from 'express';
import { groupsSchema } from '../ajv/index.js';
import { validate, authorization } from '../middleware/index.js';
import groupsController from '../controllers/groupsController.js';

const groups = new Router();
groups.use(json());

groups.post(
    '/',
    authorization,
    validate(groupsSchema.postAndDelete),
    groupsController.assignUserToGroup
);
groups.patch(
    '/',
    authorization,
    validate(groupsSchema.update),
    groupsController.updateUserGroup
);
groups.delete(
    '/',
    authorization,
    validate(groupsSchema.postAndDelete),
    groupsController.deleteFromGroup
);

export default groups;
