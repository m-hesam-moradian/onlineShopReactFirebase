import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Index from "./pages/Index/Index";
import Store from "./pages/Store/Store";
import Blog from "./pages/Blog/Blog";
import AbloutUs from "./pages/AbloutUs/AbloutUs";
import ContactUs from "./pages/ContactUs/ContactUs";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import ProductInfo from "./pages/ProductInfo/ProductInfo";
import Card from "./pages/Card/Card";

const routes = [
  { path: "/onlineShopReactFirebase/", element: <Index /> },
  {
    path: "/onlineShopReactFirebase/store",
    element: (
      <>
        <Navbar />
        <Store />
        <Footer />
      </>
    ),
  },
  {
    path: "/onlineShopReactFirebase/blog",
    element: (
      <>
        <Navbar />
        <Blog />
        <Footer />
      </>
    ),
  },
  {
    path: "/onlineShopReactFirebase/Ablout-Us",
    element: (
      <>
        <AbloutUs />
        <Footer />
      </>
    ),
  },
  {
    path: "/onlineShopReactFirebase/Contact-Us",
    element: (
      <>
        <Navbar />
        <ContactUs />
        <Footer />
      </>
    ),
  },

  {
    path: "/onlineShopReactFirebase/products/:productID",
    element: <ProductInfo />,
  },
  { path: "/onlineShopReactFirebase/Card", element: <Card /> },
  { path: "/onlineShopReactFirebase/login", element: <Login /> },
  { path: "/onlineShopReactFirebase/register", element: <Register /> },
];

export default routes;
