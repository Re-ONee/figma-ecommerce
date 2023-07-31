import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import GroupComponent from "./pages/GroupComponent";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ProductComparison from "./pages/ProductComparison";
import SingleProduct from "./pages/SingleProduct";
import CartSidebar from "./pages/CartSidebar";
import Checkout from "./pages/Checkout";
import Cart from "./pages/Cart";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/blog":
        title = "";
        metaDescription = "";
        break;
      case "/group-158":
        title = "";
        metaDescription = "";
        break;
      case "/home":
        title = "";
        metaDescription = "";
        break;
      case "/shop":
        title = "";
        metaDescription = "";
        break;
      case "/product-comparison":
        title = "";
        metaDescription = "";
        break;
      case "/single-product":
        title = "";
        metaDescription = "";
        break;
      case "/cart-sidebar":
        title = "";
        metaDescription = "";
        break;
      case "/checkout":
        title = "";
        metaDescription = "";
        break;
      case "/cart":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Contact />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/group-158" element={<GroupComponent />} />
      <Route path="/home" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/product-comparison" element={<ProductComparison />} />
      <Route path="/single-product" element={<SingleProduct />} />
      <Route path="/cart-sidebar" element={<CartSidebar />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
}
export default App;
