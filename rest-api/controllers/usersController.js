import usersModel from '../models/usersModel.js';
import jwtGenerator from '../utils/jwtGenerator.js';
import applicationsModel from '../models/applicationsModel.js';
import groupsModel from '../models/groupsModel.js';
import bcrypt from 'bcryptjs';

const usersController = {};

usersController.register = async (req, res) => {
    const exists = await usersModel.getUserByEmail(req.body.email);
    if (exists) return res.status(409).send('user already exists');

    req.body.password = await bcrypt.hash(req.body.password, 10);

    const newUser = await usersModel.createUser(req.body);

    const token = await jwtGenerator(newUser.user_id, newUser.role);
    const userData = await usersModel.getUserByEmail(req.body.email);
    res.json({ token, ...userData });
};

usersController.login = async (req, res) => {
    const user = await usersModel.getUserByEmail(req.body.email);
    if (!user) return res.status(400).send("user doesn't exist");

    const { user_id, password, role } = user;

    const verifiedPassword = await bcrypt.compare(req.body.password, password);
    if (!verifiedPassword) return res.status(401).send('incorrect credentials');

    const token = await jwtGenerator(user_id, role);
    res.json({ token, ...user });
};

usersController.getUserData = async (req, res) => {
    const userData = await usersModel.getUserById(req.user.id);
    res.status(200).json(userData);
};

usersController.getAllData = async (req, res) => {
    if (req.user.role === 'jobseeker') {
        const userData = await usersModel.getUserById(req.user.id);
        userData.groups = await groupsModel.getGroupsByUserId(req.user.id);
        userData.applications = await applicationsModel.getAllForUser(
            req.user.id
        );
        res.json(userData);
    } else if (req.user.role === 'admin') {
        const userData = await usersModel.getUserById(req.user.id);
        userData.groups = await groupsModel.getGroupsByUserId(req.user.id);

        for (let users of userData.groups) {
            const usersInGroup = await groupsModel.getUsersFromGroup(
                users.group_name
            );
            users.usersInGroup = usersInGroup;
            if (users.usersInGroup.length > 1) {
                for (let userInfo of usersInGroup) {
                    const applications = await applicationsModel.getAllForUser(
                        userInfo.user_id
                    );
                    userInfo.applications = applications;
                }
            }
        }

        res.json(userData);
    } else {
        return res.status(400).send('Not Found');
    }
};

export default usersController;
