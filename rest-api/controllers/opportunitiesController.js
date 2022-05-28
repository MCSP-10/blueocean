import opportunitiesModel from '../models/opportunitiesModel.js';

const opportunitiesController = {};

opportunitiesController.getOpportunity = async (req, res) => {
    const group = await opportunitiesModel.getOpportunity(req.params.groupName);
    res.status(200).json(group);
};

opportunitiesController.createOpportunity = async (req, res) => {
    const newOpp = await opportunitiesModel.createOpportunity(req.body);
    console.log(req.body)
    res.status(200).json(newOpp);
};

opportunitiesController.updateOpportunity = async (req, res) => {
    const updateOpp = await opportunitiesModel.updateOpportunity(
        req.body,
        req.params.opportunityId
    );
    res.status(200).json(updateOpp);
};

opportunitiesController.deleteOpportunity = async (req, res) => {
    const deleteOpp = await opportunitiesModel.deleteOpportunity(
        req.params.opportunityId
    );
    res.status(200).json(deleteOpp);
};

export default opportunitiesController;
