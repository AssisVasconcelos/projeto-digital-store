import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Categories from "./pages/Categories";
import Orders from "./pages/Orders";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProductDetail from "./pages/ProductDetail";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/products/:id" component={ProductDetail} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
