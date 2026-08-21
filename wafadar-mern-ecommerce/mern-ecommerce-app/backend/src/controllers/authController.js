import User from '../models/User.js';
import { generateToken } from '../utils/generateToken.js';
import { asyncHandler } from '../utils/asyncHandler.js';

const publicUser = (user) => ({ id: user._id, name: user.name, email: user.email, role: user.role, isActive: user.isActive });

export const register = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) return res.status(400).json({ message: 'Name, email and password are required' });
  if (password.length < 6) return res.status(400).json({ message: 'Password must be at least 6 characters' });
  const exists = await User.findOne({ email: email.toLowerCase() });
  if (exists) return res.status(409).json({ message: 'Email already registered' });
  const user = await User.create({ name, email, password, role: 'customer' });
  res.status(201).json({ user: publicUser(user), token: generateToken(user) });
});

export const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email: email?.toLowerCase() });
  if (!user || !user.isActive || !(await user.matchPassword(password || ''))) {
    return res.status(401).json({ message: 'Invalid email or password' });
  }
  res.json({ user: publicUser(user), token: generateToken(user) });
});

export const me = asyncHandler(async (req, res) => res.json({ user: publicUser(req.user) }));
