import { Route, Routes } from "react-router";
import HomePage from "./pages/home-page/HomePage";

const Content = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
};

export default Content;
