import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from './Components/Main/Main.jsx';
import Login from './Components/Login/Login.jsx';
import Home from './Components/Home/Home.jsx';
import LayoutLogin from './Components/LayoutLogin/LayoutLogin.jsx';
import LayoutRegister from './Components/LayoutRegister/LayoutRegister.jsx';
import AuthProviders from './AuthProvider/AuthProviders.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('https://traval-guru-server.vercel.app/place')
      }
    ]
  },
  {
    path: 'login',
    element: <LayoutLogin></LayoutLogin>
  },
  {
    path: 'register',
    element: <LayoutRegister></LayoutRegister>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>
      <RouterProvider router={router} />
    </AuthProviders>
  </React.StrictMode>,
)
