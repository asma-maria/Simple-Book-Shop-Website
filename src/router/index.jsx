import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Homepage from '../pages/Homepage'
import About from '../components/About'
export const router= createBrowserRouter([

    {
      path:"/",
      element:<Homepage></Homepage>
    },

    {
        path:"/About",
        element:<About></About>
      },


])