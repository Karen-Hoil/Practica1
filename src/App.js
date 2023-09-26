import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Header from './components/header.jsx';
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import CondicionAdmosferica from './page/condicionAdmosferica';
import Home from './page/Home';



function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element: <Home/>
    },
    {
      path: "/condicionAdmosferica",
      element: <CondicionAdmosferica/>
    }
  ])
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
