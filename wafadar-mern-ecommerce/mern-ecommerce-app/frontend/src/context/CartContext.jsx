import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
const CartContext = createContext(null);
export const useCart = () => useContext(CartContext);

export function CartProvider({ children }) {
  const [items, setItems] = useState(() => JSON.parse(localStorage.getItem('cart') || '[]'));
  useEffect(() => localStorage.setItem('cart', JSON.stringify(items)), [items]);
  const addToCart = (product, quantity = 1) => setItems(current => {
    const found = current.find(item => item.product === product._id);
    if (found) return current.map(item => item.product === product._id ? { ...item, quantity: Math.min(item.quantity + quantity, product.stock) } : item);
    return [...current, { product: product._id, name: product.name, price: product.price, image: product.image, stock: product.stock, quantity: Math.min(quantity, product.stock) }];
  });
  const updateQuantity = (id, quantity) => setItems(current => current.map(item => item.product === id ? { ...item, quantity: Math.max(1, Math.min(Number(quantity), item.stock)) } : item));
  const removeFromCart = id => setItems(current => current.filter(item => item.product !== id));
  const clearCart = () => setItems([]);
  const subtotal = useMemo(() => items.reduce((sum, item) => sum + item.price * item.quantity, 0), [items]);
  return <CartContext.Provider value={{ items, addToCart, updateQuantity, removeFromCart, clearCart, subtotal, count: items.reduce((s,i)=>s+i.quantity,0) }}>{children}</CartContext.Provider>;
}
