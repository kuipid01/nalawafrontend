/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
}  from "react-router-dom";
import './index.css'
import Navbar from './components/Navbar'
import Home from './components/Home';
import Categories from './Pages/Categories';
import ProductPage from './Pages/ProductPage';
import Login from './Pages/Login';
import Register from './components/Register';
import Footer from './components/Footer';
import Dahboard from './components/Dahboard';
import CartPage from './Pages/CartPage';
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

import UserContextProvider from './contexts/UserContext';
import CartContextProvider from './contexts/CartContext';
const queryClient = new QueryClient()



const Layout = () => {
  return(
    <div>
<CartContextProvider>

<UserContextProvider>


<QueryClientProvider client={queryClient}>
<Navbar/>
      <Outlet/> 
      <Footer/>
       </QueryClientProvider>
</UserContextProvider>
</CartContextProvider>
    </div>
  
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children:[
      {
          path:"/",
          element:  <Home/> 
      },
      {
       path:"/category/:id",
       element:<Categories/>
   },
   {
    path:"/product/:id",
    element:<ProductPage/>
},
      {
       path:"/login",
      element:<Login/>
  },
  {
      path:"/register",
      element:<Register/>
  },
  {
    path:"/admin",
    element:<Dahboard/>
},
{
  path:"/cart",
  element:  <CartPage/>
},
//  {
//    path:"/dashboard",
//    element:<Dashboard/>
// },
//       {
//        path:"/post/:id",
//        element:<Post/>
//    },

    ]
  },
 
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />

    <App />

  </React.StrictMode>,
)
