import commentsModel from '../models/commentsModel.js';

const commmentsController = {};

commmentsController.getAll = async (req, res) => {
    const appId = req.params.appId;
    const comment = await commentsModel.getAll(appId);
    res.status(200).json(comment);
};

commmentsController.createComment = async (req, res) => {
    const comment = await commentsModel.createComment({
        user_id: req.user.id,
        ...req.body,
    });
    res.status(200).json(comment);
};

commmentsController.updateComment = async (req, res) => {
    const { commentId } = req.params;
    const comment = await commentsModel.updateComment(commentId, req.body);
    res.status(200).json(comment);
};

commmentsController.deleteComment = async (req, res) => {
    const { commentId } = req.params;
    const comment = await commentsModel.deleteComment(commentId);
    if (!comment) return res.status(404).send('Not found');
    res.status(200).json(comment);
};

export default commmentsController;
