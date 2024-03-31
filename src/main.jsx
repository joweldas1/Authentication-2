import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MyLayout from './Layout/myLayout.jsx';
import Home from './Component/Home/Home.jsx';
import Login from './Component/Login/Login.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <MyLayout></MyLayout>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"login",
        element:<Login></Login>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
