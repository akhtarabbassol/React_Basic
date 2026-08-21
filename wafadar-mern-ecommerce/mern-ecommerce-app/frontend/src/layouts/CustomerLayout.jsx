import React from 'react';
import { Outlet } from 'react-router-dom';

import Navbar from '../components/Navbar';
export default function CustomerLayout(){ return <><Navbar/><main><Outlet/></main><footer>© {new Date().getFullYear()} Wafadar Store · Built with MERN</footer></>; }
