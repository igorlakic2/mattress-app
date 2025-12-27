import { Route, Routes } from "react-router";
import HomePage from "./pages/home-page/HomePage";
import ProductsPage from "./pages/products/ProductsPage";
import ContactPage from "./pages/contact/ContactPage";
import Cart from "./pages/cart/CartPage";
import { Box } from "@mui/material";
import NotFoundPage from "./pages/NotFoundPage";

const Content = () => {
  return (
    <Box sx={{ minHeight: "70vh" }}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/proizvodi" element={<ProductsPage />} />
        <Route path="/kontakt" element={<ContactPage />} />
        <Route path="/korpa" element={<Cart />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Box>
  );
};

export default Content;
