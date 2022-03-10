import db from './connection.js';

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
    const user = await db.oneOrNone('SELECT * FROM users WHERE email = $1', [
        email,
    ]);
    return user;
};

export default usersModel;
