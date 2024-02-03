import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import PrivateRoute from "./contexts/privateRoute";
import Login from "./pages/auth/login";
import Signup from "./pages/auth/signup";
import "./styles/index.css";
import Register from "./pages/register/register";
import { UserProvider } from "./contexts/userContext";
import Create from "./pages/create";
import Library from "./pages/library";

function App() {
  return (
    <UserProvider>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/create" element={<Create />} />
          <Route path="/library" element={<Library />} />
        </Route>
        <Route path="/signup" element={<Signup />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </UserProvider>
  );
}

export default App;
