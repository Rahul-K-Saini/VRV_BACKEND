import jwt from 'jsonwebtoken';
import { ROLE_PERMISSIONS } from '../config/roles.js';

const verifyToken = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token' });
  }
};

const hasPermission = (permission) => {
  return (req, res, next) => {
    const userRole = req.user.role;
    const permissions = ROLE_PERMISSIONS[userRole];

    if (!permissions || !permissions.includes(permission)) {
      return res.status(403).json({ message: 'Insufficient permissions' });
    }

    next();
  };
};

export {
  verifyToken,
  hasPermission
};