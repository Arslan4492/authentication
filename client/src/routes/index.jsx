import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../containers/authentication/login";
import Register from "../containers/authentication/register";
import Dashboard from "../containers/authentication/dashboard";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
