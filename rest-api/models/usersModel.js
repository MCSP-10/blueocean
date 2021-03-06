import db, { helpers } from './connection.js';

const usersModel = {};

usersModel.createUser = async (body) => {
    const newUser = await db.one(
        `INSERT INTO users (first, last, email, password, role) 
            VALUES ($(first), $(last), $(email), $(password), $(role)) 
            RETURNING *`,
        body
    );
    return newUser;
};

usersModel.getUserByEmail = async (email) => {
    const user = await db.oneOrNone(
        `
    SELECT 
    user_id, 
    first, 
    last, 
    email, 
    password, 
    role 
    FROM users WHERE email = $1`,
        [email]
    );
    return user;
};

usersModel.getUserById = async (userId) => {
    const user = await db.oneOrNone(`SELECT * FROM users WHERE user_id=$1`, [
        userId,
    ]);
    return user;
};

export default usersModel;
