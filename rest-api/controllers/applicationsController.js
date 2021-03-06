import applicationsModel from '../models/applicationsModel.js';

const applicationsController = {};

applicationsController.getApplications = async (req, res) => {
    const applications = await applicationsModel.getAllForUser(req.user.id);
    applications.forEach((application) => {
        application.logo = `https://logo.clearbit.com/${application.company}.com`;
    });
    res.status(200).json(applications);
};

applicationsController.getApplication = async (req, res) => {
    const appId = req.params.id;
    const application = await applicationsModel.getApplicationById(appId);
    res.status(200).json(application);
};

applicationsController.createApplication = async (req, res) => {
    const application = await applicationsModel.createApplication({
        user_id: req.user.id,
        ...req.body,
    });
    application.logo = `https://logo.clearbit.com/${application.company}.com`;
    res.status(200).json(application);
};

applicationsController.updateApplication = async (req, res) => {
    const { applicationId } = req.params;
    const application = await applicationsModel.updateApplication(
        applicationId,
        req.body
    );
    application.logo = `https://logo.clearbit.com/${application.company}.com`;
    res.status(200).json(application);
};

applicationsController.deleteApplication = async (req, res) => {
    const { applicationId } = req.params;
    const application = await applicationsModel.deleteApplication(
        applicationId
    );
    if (!application) return res.status(404).send('Not found');
    res.status(200).json(application);
};

export default applicationsController;
