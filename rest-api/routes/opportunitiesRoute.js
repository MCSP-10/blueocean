import { Router, json } from 'express';
import { validate, authorization } from '../middleware/index.js';
import opportunitiesController from '../controllers/opportunitiesController.js';
import { opportunitiesSchema } from '../ajv/index.js';

const opportunities = new Router();
opportunities.use(json());

opportunities.get(
    '/:groupName',
    authorization,
    opportunitiesController.getOpportunity
);
opportunities.post(
    '/',
    authorization,
    validate(opportunitiesSchema.post),
    opportunitiesController.createOpportunity
);
opportunities.patch(
    '/:opportunityId',
    authorization,
    validate(opportunitiesSchema.update),
    opportunitiesController.updateOpportunity
);
opportunities.delete(
    '/:opportunityId',
    authorization,
    opportunitiesController.deleteOpportunity
);

export default opportunities;
