import User from '../models/User.js';
import { asyncHandler } from '../utils/asyncHandler.js';

export const getUsers = asyncHandler(async (req, res) => res.json(await User.find().select('-password').sort({ createdAt: -1 })));
export const getCustomers = asyncHandler(async (req, res) => res.json(await User.find({ role: 'customer' }).select('-password').sort({ createdAt: -1 })));
export const updateUser = asyncHandler(async (req, res) => {
  const { name, email, role, isActive, password } = req.body;
  const user = await User.findById(req.params.id);
  if (!user) return res.status(404).json({ message: 'User not found' });
  if (email && email.toLowerCase() !== user.email) {
    const duplicate = await User.findOne({ email: email.toLowerCase(), _id: { $ne: user._id } });
    if (duplicate) return res.status(409).json({ message: 'Email already in use' });
    user.email = email.toLowerCase();
  }
  if (name !== undefined) user.name = name;
  if (role !== undefined) user.role = role;
  if (isActive !== undefined) user.isActive = isActive;
  if (password) user.password = password;
  await user.save();
  res.json(await User.findById(user._id).select('-password'));
});
export const deleteUser = asyncHandler(async (req, res) => {
  if (String(req.user._id) === req.params.id) return res.status(400).json({ message: 'You cannot delete your own admin account' });
  const user = await User.findByIdAndDelete(req.params.id);
  if (!user) return res.status(404).json({ message: 'User not found' });
  res.json({ message: 'User deleted' });
});
