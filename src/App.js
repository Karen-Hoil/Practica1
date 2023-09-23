import logo from './logo.svg';
import './App.css';
import Header from './components/header.jsx';
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from './page/Home';


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>
    }
  ])
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
