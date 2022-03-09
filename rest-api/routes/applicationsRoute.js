import { Router, json } from 'express';
import { applicationSchema } from '../ajv/index.js';
import { validate, authorization } from '../middleware/index.js';
import applicationsController from '../controllers/applicationsController.js';

const applications = new Router();
applications.use(json());

applications.post(
    '/',
    validate(applicationSchema),
    authorization,
    applicationsController.createApplication
);
applications.patch(
    '/:id',
    authorization,
    validate(applicationSchema),
    applicationsController.updateApplication
);
applications.delete(
    '/:id',
    authorization,
    applicationsController.deleteApplication
);

export default applications;
