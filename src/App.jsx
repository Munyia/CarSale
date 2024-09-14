import { useState } from 'react'
import './App.css'
import Register from './assets/pages/Register'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './assets/pages/Home'
import Login from './assets/pages/Login'
import ForgotPassword from './assets/components/ForgotPassword'
import Request from './assets/pages/Request'
import Confirmation from './assets/components/Confirmation'
import PaymentFailure from './assets/components/PaymentFailure'
import Contact from './assets/pages/Contact'
import CheckOut from './assets/pages/checkOut'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
 <BrowserRouter>
 <Routes>
   <Route path="/" element={<Home/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/forgotpassword" element={<ForgotPassword/>} />
        <Route path="/checkout" element={<CheckOut/>} />
        <Route path="/request" element={<Request/>} />
        <Route path="/confirmation" element={<Confirmation/>} />
        <Route path="/paymentfailure" element={<PaymentFailure/>} />
        <Route path="/contact" element={<Contact/>} />
 </Routes>
 </BrowserRouter>
    </>
  )
}

export default App
