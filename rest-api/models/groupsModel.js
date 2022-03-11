import db, { helpers } from './connection.js';

const groupsModel = {};

groupsModel.assignUserToGroup = async (body) => {
    const query = helpers.insert(body, null, 'groups');
    const userGroup = db.one(query + 'RETURNING *');
    return userGroup;
};

groupsModel.updateUserGroup = async (body, oldGroup) => {
    const query = helpers.update(body, null, 'groups');
    const userGroup = db.one(
        query + 'WHERE user_id =$1 AND group_name=$2 RETURNING *',
        [body.user_id, oldGroup]
    );
    return userGroup;
};

groupsModel.deleteFromGroup = async (body) => {
    const userGroup = db.one(
        'DELETE FROM groups WHERE user_id=$1 AND group_name=$2 RETURNING *',
        [body.user_id, body.group_name]
    );
    return userGroup;
};

export default groupsModel;
