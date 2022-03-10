import { Router, json } from 'express';
import { validate, authorization } from '../middleware/index.js';
import commentsController from '../controllers/commentsController.js';
import { commentsSchema } from '../ajv/index.js';

const comments = new Router();
comments.use(json());

comments.post(
    '/',
    authorization,
    validate(commentsSchema.post),
    commentsController.createComment
);
comments.patch(
    '/:commentId',
    authorization,
    validate(commentsSchema.update),
    commentsController.updateComment
);
comments.delete('/:commentId', authorization, commentsController.deleteComment);

export default comments;
