import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, UserCircle, LogOut, LayoutDashboard } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';
export default function Navbar() {
  const { user, logout } = useAuth(); const { count } = useCart(); const navigate = useNavigate();
  const signOut = () => { logout(); navigate('/'); };
  return <header className="navbar"><div className="container nav-inner"><Link className="brand" to="/">Wafadar<span>Store</span></Link><nav><Link to="/">Shop</Link>{user && <Link to="/orders">My Orders</Link>}{user?.role === 'admin' && <Link to="/admin"><LayoutDashboard size={17}/> Admin</Link>}</nav><div className="nav-actions">{user ? <><span className="user-chip"><UserCircle size={18}/>{user.name}</span><button className="icon-btn" onClick={signOut} title="Logout"><LogOut size={19}/></button></> : <Link className="btn btn-outline" to="/login">Login</Link>}<Link className="cart-link" to="/cart"><ShoppingCart size={21}/><b>{count}</b></Link></div></div></header>;
}
