import pool from './connection.js';
import bcrypt from 'bcrypt';
const usersModel = {};

usersModel.createUser = async (body) => {
    try {
        const { first, last, email, password, role } = body;

        const user = await pool.query('SELECT * FROM users WHERE email = $1', [
            email,
        ]);
        if (user.rows.length > 0) return false;

        const hashedPassword = await bcrypt.hash(password, 10);
        const {
            rows: [result],
        } = await pool.query(
            'INSERT INTO users (first, last, email, password, role) VALUES ($1, $2, $3, $4, $5) RETURNING user_id, role',
            [first, last, email, hashedPassword, role]
        );
        return result;
    } catch (err) {
        console.log(err);
    }
};

export default usersModel;
