import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Homepage from '../pages/Homepage'
import About from '../components/About'
import ProductList from '../components/product/ProductList'
import BookDetails from '../pages/BookDetails'
import ProductsDetailsPage from '../pages/ProductsDetailsPage'
import { ROUTES } from '../routes'

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
      }



])