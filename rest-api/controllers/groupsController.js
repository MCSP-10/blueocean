import groupsModel from '../models/groupsModel.js';
import usersModel from '../models/usersModel.js';

const groupsController = {};

groupsController.getUsersFromGroup = async (req, res) => {
    const users = await groupsModel.getUsersFromGroup(req.params.groupName);
    res.status(200).json(users);
};

groupsController.assignUserToGroup = async (req, res) => {
    const user = await usersModel.getUserByEmail(req.body.email);
    if (!user) return res.status(404).send('user does not exist');
    const insertObj = {
        user_id: user.user_id,
        group_name: req.body.group_name,
    };
    const group = await groupsModel.assignUserToGroup(insertObj);
    res.status(200).json(group);
};

groupsController.updateUserGroup = async (req, res) => {
    const user = await usersModel.getUserByEmail(req.body.email);
    if (!user) return res.status(404).send('user does not exist');
    const insertObj = {
        user_id: user.user_id,
        group_name: req.body.group_name,
    };
    const group = await groupsModel.updateUserGroup(
        insertObj,
        req.body.oldGroup
    );
    res.status(200).json(group);
};

groupsController.deleteFromGroup = async (req, res) => {
    const user = await usersModel.getUserByEmail(req.body.email);
    if (!user) return res.status(404).send('user does not exist');
    const insertObj = {
        user_id: user.user_id,
        group_name: req.body.group_name,
    };
    const group = await groupsModel.deleteFromGroup(insertObj);
    res.status(200).json(group);
};

export default groupsController;
