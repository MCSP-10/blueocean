import db, { helpers } from './connection.js';

const updatesModel = {};

updatesModel.getAll = async (applicationId) => {
    const updates = await db.manyOrNone(
        `SELECT * FROM updates WHERE application_id=$1 ORDER BY timestamp DESC`,
        [applicationId]
    );
    return updates;
};

updatesModel.createUpdate = async (body) => {
    const insertQuery = helpers.insert(body, null, 'updates');
    const newUpdate = await db.one(insertQuery + 'RETURNING *');
    return newUpdate;
};

updatesModel.patchUpdate = async (updateId, body) => {
    const updateQuery = helpers.update(body, null, 'updates');
    const newUpdate = await db.one(
        updateQuery + 'WHERE update_id=$1 RETURNING *',
        [updateId]
    );
    return newUpdate;
};

updatesModel.deleteUpdate = async (updateId) => {
    const deletedUpdate = await db.one(
        'DELETE FROM updates WHERE update_id=$1 RETURNING *',
        [updateId]
    );
    return deletedUpdate;
};

export default updatesModel;
