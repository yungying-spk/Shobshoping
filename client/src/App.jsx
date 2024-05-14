import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./page/login.jsx";
import Register from "./page/Register.jsx";
import Homepage from './page/Homepge.jsx';
import Cart from "./page/Cart.jsx";
import Order from "./page/Order.jsx";
import TrackingOrder from "./page/tracking.jsx";
import 'semantic-ui-css/semantic.min.css'


function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
    <Routes>
    <Route path="" element={<Homepage />}></Route>
    <Route path="/cart" element={<Cart />}></Route>
    <Route path="/cart/order" element={<Order />}></Route>
    <Route path="/order" element={<TrackingOrder />}></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route path="/login" element={<Login />}></Route>
    </Routes>

     
       </BrowserRouter>
  );
}

export default App;
