import { Routes, Route } from "react-router-dom";

import { UserProvider } from "./contexts/userContext";
import { CardProvider } from "./contexts/cardContext";
import PrivateRoute from "./contexts/privateRoute";

import Login from "./pages/auth/login";
import Signup from "./pages/auth/signup";
import ResetPassword from "./pages/auth/resetPassword";
import Register from "./pages/register/register";
import Dashboard from "./pages/dashboard";
import Create from "./pages/create";
import Edit from "./pages/edit";
import Library from "./pages/library";
import Revision from "./pages/revision";

import "./styles/index.css";
import "react-toastify/dist/ReactToastify.css";
import "./i18n";
import Profile from "./pages/profile";

function App() {
  return (
    <UserProvider>
      <CardProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route element={<PrivateRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/create" element={<Create />} />
            <Route path="/library" element={<Library />} />
            <Route path="/revision" element={<Revision />} />
            <Route path="/edit" element={<Edit />} />
          </Route>
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </CardProvider>
    </UserProvider>
  );
}

export default App;
