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
import Revision from "./pages/revision";
import { CardProvider } from "./contexts/cardContext";
import Edit from "./pages/edit";

function App() {
  return (
    <UserProvider>
      <CardProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route element={<PrivateRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/create" element={<Create />} />
            <Route path="/library" element={<Library />} />
            <Route path="/revision" element={<Revision />} />
            <Route path="/edit" element={<Edit />} />
          </Route>
          <Route path="/signup" element={<Signup />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </CardProvider>
    </UserProvider>
  );
}

export default App;
