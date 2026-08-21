import {Routes,Route} from 'react-router-dom';
import CustomerLayout from './layouts/CustomerLayout';
import AdminLayout from './layouts/AdminLayout';
import ProtectedRoute from './components/ProtectedRoute';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Orders from './pages/Orders';
import OrderDetails from './pages/OrderDetails';
import Dashboard from './pages/admin/Dashboard';
import Products from './pages/admin/Products';
import Users from './pages/admin/Users';
import Customers from './pages/admin/Customers';
import Sales from './pages/admin/Sales';
import React from 'react';
export default function App(){
    return(
     <Routes>
        <Route element={<CustomerLayout/>}>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/products/:id" element={<ProductDetails/>}/>
            <Route path="/cart" element={<Cart/>}/>
        </Route>
        <Route element={<ProtectedRoute/>}>
            <Route path="/checkout" element={<Checkout/>}/>
            <Route path="/orders" element={<Orders/>}/>
            <Route path="/orders/:id" element={<OrderDetails/>}/>
        </Route>
        <Route element={<ProtectedRoute admin/>}>
            <Route path="/admin" element={<AdminLayout/>}>
                <Route index element={<Dashboard/>}/>
                <Route path="products" element={<Products/>}/>
                <Route path="users" element={<Users/>}/>
                <Route path="customers" element={<Customers/>}/>
                <Route path="sales" element={<Sales/>}/>
            </Route>
        </Route>
            </Routes>
            
    )
        }


