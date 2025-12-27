import { Route, Routes } from "react-router";
import HomePage from "./pages/home-page/HomePage";
import ProductsPage from "./pages/products/ProductsPage";
import ContactPage from "./pages/contact/ContactPage";
import Cart from "./pages/cart/CartPage";

const Content = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/proizvodi" element={<ProductsPage />} />
        <Route path="/kontakt" element={<ContactPage />} />
        <Route path="/korpa" element={<Cart />} />
      </Routes>
    </div>
  );
};

export default Content;
