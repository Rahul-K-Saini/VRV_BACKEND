import express from 'express';
import { verifyToken, hasPermission } from '../middleware/auth.js';
import { PERMISSIONS } from '../config/roles.js';
import {
  getAllUsers,
  getUserById,
  updateUserRole
} from '../controllers/user.controller.js';

const router = express.Router();

router.get(
  '/',
  verifyToken,
  hasPermission(PERMISSIONS.READ_USER),
  getAllUsers
);

router.get(
  '/:id',
  verifyToken,
  hasPermission(PERMISSIONS.READ_USER),
  getUserById
);

router.patch(
  '/role',
  verifyToken,
  hasPermission(PERMISSIONS.MANAGE_ROLES),
  updateUserRole
);

export default router;