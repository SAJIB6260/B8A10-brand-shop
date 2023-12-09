import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import PageNotFound from "../Components/PageNotFound/PageNotFound";
import Home from "../Components/Pages/Home";
import AddProduct from "../Components/Pages/AddProduct";
import MyCart from "../Components/Pages/MyCart";
import Registation from "../Components/Pages/Registation";
import LogIn from "../Components/Pages/LogIn";
import BrandProducts from "../Components/Pages/BrandProducts";
import ProductDetails from "../Components/Pages/ProductDetails";
import PrivateRouter from "./PrivateRouter";
import UpdateProduct from "../Components/Pages/UpdateProduct";


const Router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <PageNotFound></PageNotFound>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
          loader: () => fetch("https://b8-a10-brand-shop-server-side-hj14z541r-sk-sajibs-projects.vercel.app/brands")
        },
        {
          path: "/addProduct",
          element: <PrivateRouter><AddProduct></AddProduct></PrivateRouter>
        },
        {
          path: "/carts/user/:email",
          element: <PrivateRouter><MyCart></MyCart></PrivateRouter>,
          loader: ({params}) => fetch(`https://b8-a10-brand-shop-server-side-hj14z541r-sk-sajibs-projects.vercel.app/carts/user/${params.email}`)
        },
        {
          path: "/registation",
          element: <Registation></Registation>
        },
        {
          path: "/login",
          element: <LogIn></LogIn>
        },
        {
          path: "/brandProducts/brand/:brand",
          element: <PrivateRouter><BrandProducts></BrandProducts></PrivateRouter>,
          loader: ({params}) => fetch(`https://b8-a10-brand-shop-server-side-hj14z541r-sk-sajibs-projects.vercel.app/products/brand/${params.brand}`)
        },
        {
          path: "/products/:id",
          element: <PrivateRouter><ProductDetails></ProductDetails></PrivateRouter>,
          loader: ({params}) => fetch(`https://b8-a10-brand-shop-server-side-hj14z541r-sk-sajibs-projects.vercel.app/products/${params.id}`)
        },
        {
          path: "/updateProduct/:id",
          element: <PrivateRouter><UpdateProduct></UpdateProduct></PrivateRouter>,
          loader: ({params}) => fetch(`https://b8-a10-brand-shop-server-side-hj14z541r-sk-sajibs-projects.vercel.app/products/${params.id}`)
        }
      ]
    },
  ]);

export default Router;