import logo from "./logo.svg";

import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import { Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/Authcontext";

function App() {
  const { currentUser } = useContext(AuthContext);
  // console.log(currentUser);
  // const ProtectedRoute = ({ children }) => {
  //   if (!currentUser) {
  //     return <Navigate to="/login"></Navigate>;
  //   }
  // };

  return (
    <div className="App">
      <Routes>
        <Route path="/">
          <Route index element={currentUser ? <Home /> : <Login />}></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="register" element={<Register />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
