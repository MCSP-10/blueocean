import { Router, json } from 'express';
import usersController from '../controllers/usersController.js';
import { validate, authorization } from '../middleware/index.js';
import { registerSchema, loginSchema } from '../ajv/index.js';

const users = new Router();
users.use(json());

users.post('/register', validate(registerSchema), usersController.register);
users.post('/login', validate(loginSchema), usersController.login);
users.get('/', authorization, usersController.getUserData);
users.get('/allData', authorization, usersController.getAllData);

export default users;
