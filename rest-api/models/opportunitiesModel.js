import db, { helpers } from './connection.js';

const opportunitiesModel = {};

opportunitiesModel.getOpportunity = async (groupName) => {
    const opportunities = await db.manyOrNone(
        `SELECT * from opportunities WHERE group_name=$1 `,
        [groupName]
    );
    return opportunities;
};
opportunitiesModel.createOpportunity = async (oppObj) => {
    const insertQuery = helpers.insert(oppObj, null, 'opportunities');
    const newOpportunity = db.one(insertQuery + 'RETURNING *');
    return newOpportunity;
};
opportunitiesModel.updateOpportunity = async (updateObj, id) => {
    const updateQuery = helpers.update(updateObj, null, 'opportunities');
    const updatedOpportunity = db.one(
        updateQuery + 'WHERE opportunity_id = $1 RETURNING *',
        [id]
    );
    return updatedOpportunity;
};
opportunitiesModel.deleteOpportunity = async (id) => {
    const deletedOpportunity = await db.one(
        `DELETE FROM opportunities WHERE opportunity_id=$1 RETURNING *`,
        [id]
    );
    return deletedOpportunity;
};
export default opportunitiesModel;
