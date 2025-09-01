import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import Aboutus from "../pages/About/Aboutus";
import MainLayout from "../layout/mainLayout";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<Aboutus />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
