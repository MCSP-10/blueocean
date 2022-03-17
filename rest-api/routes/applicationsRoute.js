import { Router, json } from 'express';
import { applicationsSchema } from '../ajv/index.js';
import { validate, authorization } from '../middleware/index.js';
import applicationsController from '../controllers/applicationsController.js';
import commentsRoute from './commentsRoute.js';
import updatesRoute from './updatesRoute.js';

const applications = new Router();
applications.use(json());

applications.get('/', authorization, applicationsController.getApplications);

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
applications.use('/updates', updatesRoute);

export default applications;
