import jwt from 'jsonwebtoken';
import 'dotenv/config';

const authorization = async (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) return res.status(401).send('unauthorized');

    try {
        const validToken = jwt.verify(token, process.env.SECRET);
        if (!validToken) return res.status(401).send('unauthorized');
        req.user = { id: validToken.id, role: validToken.role };
        next();
    } catch (err) {
        return res.status(401).send('unauthorized');
    }
};

export default authorization;
