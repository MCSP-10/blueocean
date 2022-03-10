import db, { helpers } from './connection.js';

const applicationsModel = {};

applicationsModel.createApplication = async (applicationObj) => {
    const insertQuery = helpers.insert(applicationObj, null, 'applications');
    const newApplication = await db.one(insertQuery + 'RETURNING *');
    return newApplication;
};

applicationsModel.updateApplication = async (id, obj) => {
    const updateQuery = helpers.update(obj, null, 'applications');
    const updatedApplication = await db.one(
        updateQuery + 'WHERE application_id=$1 RETURNING *',
        [id]
    );
    return updatedApplication;
};
applicationsModel.deleteApplication = async (id) => {
    const deletedApplication = await db.one(
        'DELETE FROM applications WHERE application_id=$1 RETURNING *',
        [id]
    );
    return deletedApplication;
};

export default applicationsModel;
