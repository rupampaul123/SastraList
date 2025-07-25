import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import './App.css'
import Home from './pages/home'
import Post from './pages/post';
import Login from './pages/login';
import Register from './pages/register';
import { useState } from 'react';

function App() {

   const [items, setItems] = useState([]);
   const [user, setuser] = useState([]);

  const router = createBrowserRouter([
    { 
      element: <Home items={items} setItems={setItems} />,
      path: '/',
    },
    {
      element: <Post items={items} setItems={setItems}/>,
      path: '/post',
    },
    {
      element: <Login user={user} setuser={setuser}/>,
      path: '/login'
    },
    {
      element: <Register/>,
      path: '/register'
    }
    

  ])

  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
