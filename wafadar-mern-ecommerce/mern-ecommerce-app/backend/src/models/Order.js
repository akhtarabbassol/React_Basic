import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  items: [{
    product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
    name: String,
    image: String,
    price: Number,
    quantity: { type: Number, min: 1 }
  }],
  shippingAddress: {
    fullName: String,
    phone: String,
    address: String,
    city: String,
    postalCode: String,
    country: { type: String, default: 'Pakistan' }
  },
  paymentMethod: { type: String, enum: ['COD', 'Card'], default: 'COD' },
  subtotal: Number,
  shippingFee: Number,
  total: Number,
  status: { type: String, enum: ['Pending', 'Processing', 'Shipped', 'Delivered', 'Cancelled'], default: 'Pending' }
}, { timestamps: true });

export default mongoose.model('Order', orderSchema);
