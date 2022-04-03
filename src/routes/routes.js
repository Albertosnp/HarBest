import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import { NewProductPage } from "views/NewProductPage/NewProductPage";
import { ProductDetail } from "components/ProductDetail/ProductDetail";
import { Home } from "views/Home/Home";

export const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<NewProductPage />} />
        <Route path="/:id" element={<ProductDetail />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};
