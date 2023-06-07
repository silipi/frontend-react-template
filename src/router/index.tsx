import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Home from "@/pages/Home";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PublicRoute />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>

        <Route path="/" element={<PrivateRoute />}>
          <Route path="/home" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
