import "./App.css"; // Import your CSS styles
import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";
import AddressSelection from "./pages/AddressSelection/AddressSelection";
import Cart from "./pages/Cart/Cart";
import ContactUs from "./pages/ContactUs/ContactUs";
import Login from "./pages/Login/Login";
import Payment from "./pages/Payment/Payment";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Registration from "./pages/Registration/Registration";
import Search from "./pages/Search/Search";
import Services from "./pages/Services/Services";
import About from "./pages/About/About";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { Routes, Route, useLocation } from "react-router-dom";

function App() {
  const location = useLocation();

  // Check if the current path is either '/login' or '/registration'
  const isAuthPage =
    location.pathname === "/login" || location.pathname === "/registration";

  return (
    <>
      {/* Conditionally render Navbar and Footer only if not on login or registration pages */}
      {!isAuthPage && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/address-selection" element={<AddressSelection />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/product-details" element={<ProductDetails />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/search" element={<Search />} />
        <Route path="/services" element={<Services />} />
      </Routes>

      {!isAuthPage && <Footer />}
    </>
  );
}

export default App;
