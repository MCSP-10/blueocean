import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

export default function jwtGenerator(user_id, role) {
    let payload = {
        user: user_id,
        role: role,
    };
    console.log(payload);
    return jwt.sign(payload, process.env.SECRET);
}
