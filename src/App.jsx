import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom'
import Home from './pages/home/Home'
import Order from './pages/order/Order'
import Cart from './pages/cart/Cart'
import Dashboard from './pages/admin/dashboard/Dashboard'
import MyState from './context/data/myState'
import Login from './pages/registration/Login'
import SignUp from './pages/registration/SignUp'
import ProductInfo from './pages/productinfo/ProductInfo'
import AddProducts from './pages/admin/pages/AddProducts'
import UpdateProducts from './pages/admin/pages/UpdateProducts'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <>
      <MyState>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/order" element={<Order />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/productinfo/:id" element={<ProductInfo />} />
            <Route path="/addproducts" element={<AddProducts />} />
            <Route path="/updateproducts" element={<UpdateProducts/>}/>
          </Routes>
          <ToastContainer />
        </Router>
      </MyState>

    </>
  )
}

export default App

// export const ProtectedRoutes = ({ children }) => {
//   if (localStorage.getItem("user")) {
//     return children
//   }
//   else {
//     return <Navigate to='/login' />
//   }
// }

// export const ProtectedRoutesForAdmin = ({ children }) => {
//   const admin = JSON.parse(localStorage.getItem("user"))
//   console.log(admin.user.email)

//   if (user !== null) {
//     // Access 'user' properties here
//   } else {
//     // Handle the case when 'user' is null
//   }

  
//   if (admin.user.email === "abc@gmail.com") {
//     return children
//   }
//   else {
//     return <Navigate to='/login' />
//   }
// }
