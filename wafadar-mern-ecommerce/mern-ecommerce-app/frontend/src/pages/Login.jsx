import React from 'react';
import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
export default function Login(){const [form,setForm]=useState({email:'',password:''}),[error,setError]=useState('');const {login}=useAuth();const nav=useNavigate();const loc=useLocation();
 const submit=async e=>{e.preventDefault();setError('');try{const user=await login(form);nav(user.role==='admin'?'/admin':(loc.state?.from||'/'));}catch(err){setError(err.response?.data?.message||'Login failed')}};
 return <div className="auth-page"><div className="auth-card"><span className="eyebrow">WELCOME BACK</span><h1>Sign in</h1><p className="muted">Access your account and continue shopping.</p>{error&&<div className="alert error">{error}</div>}<form onSubmit={submit}><label>Email<input type="email" required value={form.email} onChange={e=>setForm({...form,email:e.target.value})}/></label><label>Password<input type="password" required value={form.password} onChange={e=>setForm({...form,password:e.target.value})}/></label><button className="btn btn-primary full">Login</button></form><p className="auth-switch">New customer? <Link to="/register">Create an account</Link></p></div></div>}
