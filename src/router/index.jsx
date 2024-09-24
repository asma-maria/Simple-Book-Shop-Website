import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Homepage from '../pages/Homepage'
import About from '../components/About'
import ProductList from '../components/product/ProductList'

import ProductsDetailsPage from '../pages/ProductsDetailsPage'
import { ROUTES } from '../routes'

import FaqPage from '../pages/FaqPage'
import NotFound from '../components/NotFound'


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
        element:<ProductList></ProductList>
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

      }




])