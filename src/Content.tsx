import { Route, Routes } from "react-router";
import HomePage from "./pages/home-page/HomePage";
import ProductsPage from "./pages/products/ProductsPage";

const Content = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/proizvodi" element={<ProductsPage />} />
      </Routes>
    </div>
  );
};

export default Content;
