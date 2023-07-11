import { createBrowserRouter } from "react-router-dom"
import Home from './components/Home'
import Products from "./components/Products"
import Cart from "./components/Products"
import Adminhome from "./components/Adminhome"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/products",
    element: <Products/>
  },
  {
    path: "/cart",
    element: <Cart/>
  },
  {
    path: "/admin",
    element: <Adminhome/>
  }
])

export default router