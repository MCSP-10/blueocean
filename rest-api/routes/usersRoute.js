import { Router, json } from 'express';
import usersController from '../controllers/usersController.js';
import { validate } from '../middleware/index.js';
import { userSchema } from '../ajv/index.js';

const users = new Router();
users.use(json());

users.post('/register', validate(userSchema), usersController.register);

export default users;
