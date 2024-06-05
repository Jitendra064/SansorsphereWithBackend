// import AddPost2 from "../pages/AddPost2";
import { About } from "../Components/About";
import FAQ from "../Components/FAQ";
import Home from "../Components/Home";
import Product from "../Components/Product";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";

export const publicRoutes = [
  {
    name: "login",
    path: "/login",
    element: Login,
  },
  {
    name: "signup",
    path: "/signup",
    element: Signup,
  },
];

export const privateRouter = [
  {
    name: "Home",
    path: "/",
    element: Home,
  },
  {
    name: "About",
    path: "/about",
    element: About,
  },
  {
    name: "Products",
    path: "/products",
    element: Product,
  },
  {
    name: "FAQ",
    path: "/faq",
    element: FAQ,
  },
];
