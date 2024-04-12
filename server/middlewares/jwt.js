import  express from 'express';
import jwt from 'jsonwebtoken'
const routeruser = express.Router();
// Secret key for JWT signing
const JWT_SECRET = 'your-secret-key';
import bcrypt from 'bcrypt';
export function authenticateToken(req, res, next) {
    const token = req.cookies.token;
    console.log(token);
    if (!token) {
        return res.status(401).json({ error: 'Unauthorized' });
    }
    jwt.verify(token, JWT_SECRET, (err, user) => {
        if (err) {
            return res.status(403).json({ error: 'Forbidden' });
        }
        req.user = user;
        next();
    });
}
