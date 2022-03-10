import jwt from 'jsonwebtoken';

export default function jwtGenerator(user_id, role) {
    let payload = {
        id: user_id,
        role: role,
    };
    return jwt.sign(payload, process.env.SECRET, { expiresIn: '36hr' });
}
