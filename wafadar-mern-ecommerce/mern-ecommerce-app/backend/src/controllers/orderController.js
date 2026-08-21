import Order from '../models/Order.js';
import Product from '../models/Product.js';
import { asyncHandler } from '../utils/asyncHandler.js';

export const createOrder = asyncHandler(async (req, res) => {
  const { items, shippingAddress, paymentMethod = 'COD' } = req.body;
  if (!Array.isArray(items) || !items.length) return res.status(400).json({ message: 'Cart is empty' });
  const normalized = [];
  let subtotal = 0;
  for (const item of items) {
    const product = await Product.findById(item.product);
    if (!product || !product.isActive) return res.status(400).json({ message: 'One of the products is unavailable' });
    if (product.stock < item.quantity) return res.status(400).json({ message: `${product.name} has insufficient stock` });
    normalized.push({ product: product._id, name: product.name, image: product.image, price: product.price, quantity: item.quantity });
    subtotal += product.price * item.quantity;
  }
  const shippingFee = subtotal >= 10000 ? 0 : 250;
  const order = await Order.create({ user: req.user._id, items: normalized, shippingAddress, paymentMethod, subtotal, shippingFee, total: subtotal + shippingFee });
  await Promise.all(normalized.map(item => Product.findByIdAndUpdate(item.product, { $inc: { stock: -item.quantity } })));
  res.status(201).json(await Order.findById(order._id).populate('user', 'name email'));
});

export const getMyOrders = asyncHandler(async (req, res) => res.json(await Order.find({ user: req.user._id }).sort({ createdAt: -1 })));
export const getOrder = asyncHandler(async (req, res) => {
  const filter = req.user.role === 'admin' ? { _id: req.params.id } : { _id: req.params.id, user: req.user._id };
  const order = await Order.findOne(filter).populate('user', 'name email');
  if (!order) return res.status(404).json({ message: 'Order not found' });
  res.json(order);
});
export const getAllOrders = asyncHandler(async (req, res) => res.json(await Order.find().populate('user', 'name email').sort({ createdAt: -1 })));
export const updateOrderStatus = asyncHandler(async (req, res) => {
  const { status } = req.body;
  const allowed = ['Pending', 'Processing', 'Shipped', 'Delivered', 'Cancelled'];
  if (!allowed.includes(status)) return res.status(400).json({ message: 'Invalid order status' });
  const order = await Order.findByIdAndUpdate(req.params.id, { status }, { new: true }).populate('user', 'name email');
  if (!order) return res.status(404).json({ message: 'Order not found' });
  res.json(order);
});
