import applicationsModel from '../models/applicationsModel.js';

const applicationsController = {};

applicationsController.createApplication = async (req, res) => {
    const application = await applicationsModel.createApplication({
        id: req.user.id,
        role: req.user.role,
        ...req.body,
    });
    res.status(200).json(application);
};

applicationsController.updateApplication = async (req, res) => {
    const application = await applicationsModel.updateApplication(
        req.params.id,
        req.body
    );
    res.status(200).json(application);
};

applicationsController.deleteApplication = async (req, res) => {
    const application = await applicationsModel.deleteApplication(
        req.params.id
    );
    res.status(200).json(application);
};

export default applicationsController;
