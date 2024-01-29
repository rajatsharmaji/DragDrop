import jwt from "jsonwebtoken";

const SECRET_KEY = 'RAJAT%$#*07';
export const verifyToken=(req, res, next)=> {
    const token = req.header('Authorization');
    console.log("TOKEN: ",token);
    if (!token) return res.status(401).json({ error: 'Access denied' });
    try {
     const decoded = jwt.verify(token, SECRET_KEY);
     req.userId = decoded.userId;
     next();
     } catch (error) {
     res.status(401).json({ error: 'Invalid token' });
     }
     };