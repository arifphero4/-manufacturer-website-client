import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Navbar from "./Pages/Shared/Navbar";
import Login from "./Pages/Login/Login";
import Footer from "./Pages/Shared/Footer";
import SignUp from "./Pages/Login/SignUp";
import Purchase from "./Pages/Purchase/Purchase";
import RequireAuth from "./Pages/Login/RequireAuth";
import Blogs from "./Pages/Blogs/Blogs";
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route
          path="purchase"
          element={
            <RequireAuth>
              <Purchase />
            </RequireAuth>
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
