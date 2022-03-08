import { Router, json } from 'express';
import usersController from '../controllers/usersController.js';
import { validate } from '../middleware/index.js';
import { registerSchema, loginSchema } from '../ajv/index.js';

const users = new Router();
users.use(json());

users.post('/register', validate(registerSchema), usersController.register);
users.post('/login', validate(loginSchema), usersController.login);

export default users;
