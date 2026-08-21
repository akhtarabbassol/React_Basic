import Product from '../models/Product.js';
import { asyncHandler } from '../utils/asyncHandler.js';

export const getProducts = asyncHandler(async (req, res) => {
  const { search, category } = req.query;
  const filter = { isActive: true };
  if (search) filter.$or = [{ name: { $regex: search, $options: 'i' } }, { description: { $regex: search, $options: 'i' } }];
  if (category && category !== 'All') filter.category = category;
  res.json(await Product.find(filter).sort({ createdAt: -1 }));
});

export const getAllProducts = asyncHandler(async (req, res) => res.json(await Product.find().sort({ createdAt: -1 })));
export const getProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product) return res.status(404).json({ message: 'Product not found' });
  res.json(product);
});
export const createProduct = asyncHandler(async (req, res) => res.status(201).json(await Product.create(req.body)));
export const updateProduct = asyncHandler(async (req, res) => {
  const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
  if (!product) return res.status(404).json({ message: 'Product not found' });
  res.json(product);
});
export const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findByIdAndDelete(req.params.id);
  if (!product) return res.status(404).json({ message: 'Product not found' });
  res.json({ message: 'Product deleted' });
});
