import db, { helpers } from './connection.js';

const groupsModel = {};

groupsModel.getGroupsByUserId = async (userId) => {
    const groups = await db.manyOrNone(
        `SELECT group_name FROM groups WHERE user_id =$1`,
        [userId]
    );
    return groups;
};

groupsModel.getUsersFromGroup = async (groupName) => {
    const groups = await db.manyOrNone(
        `SELECT user_id FROM groups WHERE group_name=$1`,
        [groupName]
    );
    return groups;
};

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
