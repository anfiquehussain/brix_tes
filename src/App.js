import "./App.css"; // Import your CSS styles
import Home from "./pages/Home/Home";
import Projects from './pages/Projects/Projects';
import AddressSelection from './pages/AddressSelection/AddressSelection';
import Cart from './pages/Cart/Cart';
import ContactUs from './pages/ContactUs/ContactUs';
import Login from './pages/Login/Login';
import Payment from './pages/Payment/Payment';
import ProductDetails from './pages/ProductDetails/ProductDetails';
import Registration from './pages/Registration/Registration';
import Search from './pages/Search/Search';
import Services from './pages/Services/Services';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/address-selection" element={<AddressSelection />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/product-details" element={<ProductDetails />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/search" element={<Search />} />
        <Route path="/service" element={<Services />} />
      </Routes>

  );
}

export default App;
