import React from 'react';
import {useEffect,useState} from 'react';
import {Users,UserRound,Package,ReceiptText,WalletCards} from 'lucide-react';import api from '../../services/api';
export default function Dashboard(){
    const [d,setD]=useState(null);useEffect(()=>{api.get('/dashboard').then(r=>setD(r.data))},[]);
    const cards=d?[['Users',d.users,Users],['Customers',d.customers,UserRound],['Products',d.products,Package],['Sales',d.orders,ReceiptText],['Revenue',`Rs. ${d.revenue.toLocaleString()}`,WalletCards]]:[];
    return <div className="admin-page"><div className="admin-top"><div><span className="eyebrow">OVERVIEW</span><h1>Dashboard</h1><p className="muted">Monitor your store at a glance.</p></div></div><div className="stat-grid">{cards.map(([l,v,I])=><div className="stat-card" key={l}><div className="stat-icon"><I/></div><span>{l}</span><strong>{v}</strong></div>)}</div><div className="admin-welcome"><span className="eyebrow">OPERATIONS</span><h2>Manage your complete store</h2><p>Use the sidebar to manage products, users, customers and sales. Customer orders are automatically connected to sales and inventory.</p></div></div>}
