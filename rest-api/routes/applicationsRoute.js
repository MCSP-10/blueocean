import { Router, json } from 'express';
import { applicationsSchema } from '../ajv/index.js';
import { validate, authorization } from '../middleware/index.js';
import applicationsController from '../controllers/applicationsController.js';
import commentsRoute from './commentsRoute.js';

const applications = new Router();
applications.use(json());

applications.post(
    '/',
    authorization,
    validate(applicationsSchema.post),
    applicationsController.createApplication
);
applications.patch(
    '/:applicationId',
    authorization,
    validate(applicationsSchema.update),
    applicationsController.updateApplication
);
applications.delete(
    '/:applicationId',
    authorization,
    applicationsController.deleteApplication
);

applications.use('/comments', commentsRoute);

export default applications;
