import usersModel from '../models/usersModel.js';
import jwtGenerator from '../utils/jwtGenerator.js';
import bcrypt from 'bcryptjs';

const usersController = {};

usersController.register = async (req, res) => {
    const exists = await usersModel.getUserByEmail(req.body.email);
    if (exists) return res.status(409).send('user already exists');

    req.body.password = await bcrypt.hash(req.body.password, 10);

    const newUser = await usersModel.createUser(req.body);

    const token = await jwtGenerator(newUser.user_id, newUser.role);
    res.json({ token });
};

usersController.login = async (req, res) => {
    const user = await usersModel.getUserByEmail(req.body.email);
    if (!user) return res.status(400).send("user doesn't exist");

    const { user_id, password, role } = user;

    const verifiedPassword = await bcrypt.compare(req.body.password, password);
    if (!verifiedPassword) return res.status(401).send('incorrect credentials');

    const token = await jwtGenerator(user_id, role);
    res.json({ token });
};

export default usersController;
