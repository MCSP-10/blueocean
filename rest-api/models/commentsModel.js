import db, { helpers } from './connection.js';

const commentsModel = {};

commentsModel.getAll = async (applicationId) => {
    const comments = await db.manyOrNone(
        `SELECT * FROM comments WHERE application_id=$1 ORDER BY timestamp DESC`,
        [applicationId]
    );
    return comments;
};

commentsModel.createComment = async (commentObj) => {
    const insertQuery = helpers.insert(commentObj, null, 'comments');
    const newComment = db.one(insertQuery + 'RETURNING *');
    return newComment;
};

commentsModel.updateComment = async (id, commentObj) => {
    const updateQuery = helpers.update(commentObj, null, 'comments');
    const updatedComment = await db.one(
        updateQuery + 'WHERE comment_id=$1 RETURNING *',
        [id]
    );
    return updatedComment;
};

commentsModel.deleteComment = async (id) => {
    const deletedComment = await db.one(
        'DELETE FROM comments WHERE comment_id=$1 RETURNING *',
        [id]
    );
    return deletedComment;
};

export default commentsModel;
