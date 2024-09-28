import { useEffect, useState } from 'react'
import './App.css'
import Register from './assets/pages/Register'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './assets/context/CartContext.jsx';
import Home from './assets/pages/Home'
import Login from './assets/pages/Login'
import ForgotPassword from './assets/components/ForgotPassword'
import Request from './assets/pages/Request'
import Confirmation from './assets/components/Confirmation'
import PaymentFailure from './assets/components/PaymentFailure'
import Contact from './assets/pages/Contact'
import FAQ from './assets/pages/FAQ'
import CarListing from './assets/pages/CarListing'
import CarDetail from './assets/pages/CarDetail'
import CheckOut from './assets/pages/CheckOut'
import Header from './assets/components/Header'
import Footer from './assets/components/Footer'
import UserProfile from './assets/pages/UserProfile'
import Cart from './assets/components/Cart'
import Auction from './assets/pages/Auction.jsx';
import Loader from './assets/components/Loader.jsx';
import Terms from './assets/pages/Terms.jsx';
import About from './assets/pages/About.jsx';
import Privacy from './assets/pages/Privacy.jsx';
import SavedCars from './assets/pages/SavedCars.jsx';
import { ThemeProvider, useTheme  } from './assets/context/Themecontext.jsx';
import Financing from './assets/pages/Financing.jsx';
import Popular from './assets/components/Popular.jsx';


function App() {
  const [count, setCount] = useState(0)
  const { theme } = useTheme(); // Get the current theme from context

  

  useEffect(() => {
    if (theme) {
      document.body.className = ''; // Clear any previous theme classes
      document.body.classList.add(theme); // Apply the new theme class
    }
  }, [theme]); // Runs every time the theme changes

  return (
    <>
  <div className={`app ${theme}`}>
  <CartProvider>
    <BrowserRouter>
      <Header /> {/* Header at the top */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/checkout" element={<CheckOut />} />
        <Route path="/request" element={<Request />} />
        <Route path="/confirmation" element={<Confirmation />} />
        <Route path="/paymentfailure" element={<PaymentFailure />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/carlisting/cardetail/:carId" element={<CarDetail />} />
        <Route path="/carlisting" element={<CarListing />} />
        <Route path="/cars/:carId" element={<CarDetail />} />
        <Route path="/userprofile" element={<UserProfile />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/auction" element={<Auction />} />
        <Route path="/loader" element={<Loader />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/about" element={<About />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/savedcars" element={<SavedCars />} />
        <Route path="/financing" element={<Financing />} />
        <Route path="/popular" element={<Popular />} />
      </Routes>
      <Footer /> {/* Footer at the bottom */}
    </BrowserRouter>
  </CartProvider>
</div>

    </>
  )
}
const AppWrapper = () => (
  <ThemeProvider>
    <App />
  </ThemeProvider>
);

export default AppWrapper;