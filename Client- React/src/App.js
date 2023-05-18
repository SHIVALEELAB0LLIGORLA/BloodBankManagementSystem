import { createContext } from 'react';
import './App.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import React from 'react'
import Home from './components/Home/Home/Home';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Login from './Login';
import Registration from './Registration';
import Admin from './Admin';
import User from './User';
import { Stock } from './components/Stock';
import { Donor } from './components/Donor';
import { Receiver } from './components/Receiver';
import Donate from './components/Donate';
import Request from './components/Request';
import { Person } from './components/Person';




export const UserContext = createContext();

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/login', element: <Login /> },
  { path: '/dashboard', element: <Dashboard /> },
  { path:'/register', element:<Registration />},
  { path:"/admin", element:<Admin />},
  { path:"/user", element:<User/>},
  { path: "/stock", element:<Stock/>},
  
  { path: "/donor", element:<Donor/>},
  { path:"/donate", element:<Donate/>},
  { path:"/receiver", element:<Receiver/>},
  { path: "/request", element:<Request/>},
  { path: "/person", element:<Person/>}
  
])

function App() {
  return (
    <div>
      <RouterProvider router={router} />     
    </div>
  );
}
export default App;
