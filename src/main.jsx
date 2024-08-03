import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/Home.jsx';
import Main from './Pages/Main.jsx';
import Assignments from './Pages/Assignments.jsx';
import SearchPage from './Pages/SearchPage.jsx';
import About from './Pages/About.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/Assignments",
        element:<Assignments></Assignments>
      },
      {
        path:'/searchPage',
        element:<SearchPage></SearchPage>
      },
      {
        path:"/AboutUs",
        element:<About></About>
      }

    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='mx-auto max-w-7xl lg:px-0 px-5'>
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>
)
