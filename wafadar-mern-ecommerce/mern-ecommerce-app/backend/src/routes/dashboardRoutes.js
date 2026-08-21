import express from 'express';
import { getDashboard } from '../controllers/dashboardController.js';
import { adminOnly, protect } from '../middleware/authMiddleware.js';
const router = express.Router();
router.get('/', protect, adminOnly, getDashboard);
export default router;
