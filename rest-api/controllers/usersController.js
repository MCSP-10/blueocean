import usersModel from '../models/usersModel.js';
import jwtGenerator from '../utils/jwtGenerator.js';
const usersController = {};

usersController.register = async (req, res) => {
    const newUser = await usersModel.createUser(req.body);
    if (!newUser) return res.status(409).send('user already exists');
    const token = await jwtGenerator(newUser.user_id, newUser.role);
    res.json({ token });
};

export default usersController;
