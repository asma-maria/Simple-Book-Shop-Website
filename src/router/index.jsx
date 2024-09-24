import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Homepage from '../pages/Homepage'
import About from '../components/About'


import ProductsDetailsPage from '../pages/ProductsDetailsPage'
import { ROUTES } from '../routes'

import FaqPage from '../pages/FaqPage'
import NotFound from '../components/NotFound'
import Blog from '../components/Blog'
import BuyBook from '../pages/BuyBook'
import SingIn from '../pages/SingIn'


export const router= createBrowserRouter([

    {
      path:"/",
      element:<Homepage></Homepage>
    },

    {
        path:"/About",
        element:<About></About>
      },

      {
        path:"/books",
        element:<BuyBook></BuyBook>
      }
      ,
      {
        path:`${ROUTES.SINGLE_PRODUCTS.STATIC}`,
        element:<ProductsDetailsPage></ProductsDetailsPage>
      },
      {
        path:"/faq",
        element:<FaqPage></FaqPage>

      },
      {
        path:"*",
        element:<NotFound></NotFound>

      },
      {
        path:"/blog",
        element:<Blog></Blog>
      },
      {
        path:"/signin",
        element:<SingIn></SingIn>
      }
     




])