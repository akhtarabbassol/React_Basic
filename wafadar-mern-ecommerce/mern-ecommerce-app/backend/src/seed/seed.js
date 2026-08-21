import 'dotenv/config';
import { connectDB } from '../config/db.js';
import User from '../models/User.js';
import Product from '../models/Product.js';

const products = [
  { name: 'Classic Watch', description: 'Minimal stainless-steel everyday watch.', price: 7499, category: 'Fashion', stock: 18, image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=80' },
  { name: 'Wireless Headphones', description: 'Comfortable over-ear headphones with rich sound.', price: 12999, category: 'Electronics', stock: 25, image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=80' },
  { name: 'Running Shoes', description: 'Lightweight cushioned shoes for daily training.', price: 8999, category: 'Sports', stock: 30, image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80' },
  { name: 'Leather Backpack', description: 'Premium backpack for work and travel.', price: 5999, category: 'Fashion', stock: 14, image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=80' },
  { name: 'Smartphone', description: 'Modern smartphone with a bright display.', price: 64999, category: 'Electronics', stock: 10, image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80' },
  { name: 'Coffee Maker', description: 'Compact coffee maker for home and office.', price: 10999, category: 'Home', stock: 12, image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=80' }
];

await connectDB();
const adminEmail = process.env.ADMIN_EMAIL || 'admin@example.com';
const adminPassword = process.env.ADMIN_PASSWORD || 'Admin@12345';
let admin = await User.findOne({ email: adminEmail.toLowerCase() });
if (!admin) admin = await User.create({ name: 'System Admin', email: adminEmail, password: adminPassword, role: 'admin' });
else { admin.role = 'admin'; admin.isActive = true; admin.password = adminPassword; await admin.save(); }

if ((await Product.countDocuments()) === 0) await Product.insertMany(products);
console.log('Seed complete. Admin:', adminEmail);
process.exit(0);
