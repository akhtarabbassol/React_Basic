import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';
export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  return <article className="product-card"><Link to={`/products/${product._id}`}><img src={product.image} alt={product.name}/></Link><div className="product-body"><span className="category">{product.category}</span><Link to={`/products/${product._id}`}><h3>{product.name}</h3></Link><p className="muted">{product.description}</p><div className="product-bottom"><strong>Rs. {product.price.toLocaleString()}</strong><button className="btn btn-primary small" disabled={!product.stock} onClick={()=>addToCart(product)}><ShoppingCart size={16}/>{product.stock ? 'Add' : 'Out'}</button></div></div></article>;
}
