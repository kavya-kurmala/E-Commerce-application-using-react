import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Vendor from "./pages/Vendor";
import User from "./pages/User";
import Cart from "./pages/Cart";
import "./styles.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vendor" element={<Vendor />} />
        <Route path="/user" element={<User />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
