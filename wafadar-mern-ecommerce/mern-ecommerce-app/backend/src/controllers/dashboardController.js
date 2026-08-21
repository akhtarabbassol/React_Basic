import User from '../models/User.js';
import Product from '../models/Product.js';
import Order from '../models/Order.js';
import { asyncHandler } from '../utils/asyncHandler.js';

export const getDashboard = asyncHandler(async (req, res) => {
  const [users, customers, products, orders, revenue] = await Promise.all([
    User.countDocuments(), User.countDocuments({ role: 'customer' }), Product.countDocuments(), Order.countDocuments(),
    Order.aggregate([{ $match: { status: { $ne: 'Cancelled' } } }, { $group: { _id: null, total: { $sum: '$total' } } }])
  ]);
  res.json({ users, customers, products, orders, revenue: revenue[0]?.total || 0 });
});
