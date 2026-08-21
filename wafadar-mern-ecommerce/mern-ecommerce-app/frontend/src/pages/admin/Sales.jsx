import React from 'react';
import {useEffect,useState} from 'react';import api from '../../services/api';

const statuses=['Pending','Processing','Shipped','Delivered','Cancelled'];

export default function Sales(){
    const [orders,setOrders]=useState([]);
    const load=()=>api.get('/orders/admin/all').then(r=>setOrders(r.data));useEffect(()=>{load()},[]);
    const change=async(id,status)=>{await api.put(`/orders/${id}/status`,{status});load()};
    return (
    <div className="admin-page"><div className="admin-top"><
        div><span className="eyebrow">ORDER OPERATIONS</span><h1>Sales</h1><p className="muted">Every customer order becomes a sales record automatically.</p></div></div><div className="table-card"><table><thead><tr><th>Order</th><th>Customer</th><th>Items</th><th>Total</th><th>Date</th><th>Status</th></tr></thead><tbody>{orders.map(o=><tr key={o._id}><td><b>#{o._id.slice(-8).toUpperCase()}</b></td><td>{o.user?.name}<br/><small>{o.user?.email}</small></td><td>{o.items.reduce((s,i)=>s+i.quantity,0)}</td><td><b>Rs. {o.total.toLocaleString()}</b></td><td>{new Date(o.createdAt).toLocaleDateString()}</td><td><select className="status-select" value={o.status} onChange={e=>change(o._id,e.target.value)}>{statuses.map(s=><option key={s}>{s}</option>)}</select></td></tr>)}
    </tbody></table>{!orders.length&&<div className="empty">No sales yet.</div>}</div></div>
    )}
