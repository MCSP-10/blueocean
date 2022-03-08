import pool from './connection.js';

const usersModel = {};

usersModel.createUser = async (body) => {
    const { first, last, email, password, role } = body;
    const {
        rows: [result],
    } = await pool.query(
        'INSERT INTO users (first, last, email, password, role) VALUES ($1, $2, $3, $4, $5) RETURNING *',
        [first, last, email, password, role]
    );
    return result;
};

usersModel.getUserByEmail = async (email) => {
    const user = await pool.query('SELECT * FROM users WHERE email = $1', [
        email,
    ]);
    if (user.rows.length < 1) return false;
    return user.rows[0];
};

export default usersModel;
