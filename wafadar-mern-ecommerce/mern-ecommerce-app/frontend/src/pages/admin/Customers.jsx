import React from 'react';
import {useEffect,useState} from 'react';
import {Edit,Trash2,X} from 'lucide-react';
import api from '../../services/api';

export default function Customers(){
	const [users,setUsers]=useState([]),[selected,setSelected]=useState(null),[error,setError]=useState('');
	const load=()=>api.get('/users/customers').then(r=>setUsers(r.data));
	useEffect(()=>{load()},[]);
	const save=async e=>{
		e.preventDefault();
		try{
			await api.put(`/users/${selected._id}`,{name:selected.name,email:selected.email,isActive:selected.isActive});
			setSelected(null);setError('');load();
		}catch(err){setError(err.response?.data?.message||'Save failed')}
	};
	const del=async id=>{
		if(!confirm('Delete this customer?'))return;
		try{await api.delete(`/users/${id}`);load()}catch(err){alert(err.response?.data?.message||'Delete failed')}
	};
	return <div className="admin-page"><div className="admin-top"><div><span className="eyebrow">CUSTOMER DIRECTORY</span><h1>Customers</h1><p className="muted">View, update and manage customer accounts.</p></div></div><div className="table-card"><table><thead><tr><th>Customer</th><th>Email</th><th>Status</th><th>Joined</th><th>Actions</th></tr></thead><tbody>{users.map(u=><tr key={u._id}><td><div className="customer-name"><div className="avatar small">{u.name[0]}</div><b>{u.name}</b></div></td><td>{u.email}</td><td><span className={`status ${u.isActive?'delivered':'cancelled'}`}>{u.isActive?'Active':'Disabled'}</span></td><td>{new Date(u.createdAt).toLocaleDateString()}</td><td><button className="icon-btn" onClick={()=>{setSelected(u);setError('')}}><Edit/></button><button className="icon-btn danger" onClick={()=>del(u._id)}><Trash2/></button></td></tr>)}</tbody></table>{!users.length&&<div className="empty">No customers yet.</div>}</div>{selected&&<div className="modal-backdrop"><div className="modal"><button className="modal-close" onClick={()=>setSelected(null)}><X/></button><span className="eyebrow">CUSTOMER</span><h2>Edit customer</h2>{error&&<div className="alert error">{error}</div>}<form onSubmit={save}><label>Name<input required value={selected.name} onChange={e=>setSelected({...selected,name:e.target.value})}/></label><label>Email<input required type="email" value={selected.email} onChange={e=>setSelected({...selected,email:e.target.value})}/></label><label className="check"><input type="checkbox" checked={selected.isActive} onChange={e=>setSelected({...selected,isActive:e.target.checked})}/> Active account</label><button className="btn btn-primary full">Save changes</button></form></div></div>}</div>
}
