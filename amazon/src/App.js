import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Shared from './pages/Shared/Shared';
import CheckOut from './pages/CheckOut/CheckOut';
import Login from './pages/Login/Login';
import { useStateValue } from './StateProvider';
import { useEffect } from 'react';
import { auth } from './Firebase';
import Payment from './Components/Payment/Payment';
import {loadStripe} from '@stripe/stripe-js'
import {Elements} from '@stripe/react-stripe-js'
import Orders from './pages/Orders/Orders';
import Products from './Components/Products/Products';

const promise = loadStripe('pk_test_51NdZaVFVYMq50YI8fz99X9nqlhGKHWt1MIuwqY7ou3zoaBrkvv7BllBnYN4Gz9hRuEIcwyi4mwWTGuiV9lrB7fbo009q7Laqtn')

function App() {
  const [{}, dispatch] = useStateValue()

  useEffect(()=>{
    auth.onAuthStateChanged((authUser)=>{
      if(authUser){
        dispatch({
          type: "SET_USER",
          user: authUser
        })
      }else{
        dispatch({
          type:"SET_USER",
          user: null
        })
      }
    })
  },[])

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Shared />}>
          <Route path="/" element={<Home />}/>
          <Route path="/checkout" element={<CheckOut />}/>
          <Route path="/orders" element={<Orders />}/>
          <Route path="/products" element={<Products />}/>
          <Route path="/payment" element={<Elements stripe={promise}>
            <Payment />
          </Elements>}/>
        </Route>
        <Route path="/login" element={<Login />}/>
      </Routes>      
    </div>
  );
}

export default App;
