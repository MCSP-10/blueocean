import updatesModel from '../models/updatesModel.js';

const updatesController = {};

updatesController.createUpdate = async (req, res) => {
    const update = await updatesModel.createUpdate(req.body);
    res.status(200).json(update);
};

updatesController.patchUpdate = async (req, res) => {
    const { updateId } = req.params;
    const update = await updatesModel.patchUpdate(updateId, req.body);
    res.status(200).json(update);
};

updatesController.deleteUpdate = async (req, res) => {
    const { updateId } = req.params;
    const update = await updatesModel.deleteUpdate(updateId);
    res.status(200).json(update);
};

export default updatesController;
