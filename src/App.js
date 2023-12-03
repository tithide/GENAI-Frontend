import React,{useState,useEffect} from 'react';
import './App.css';
import LoginScreen from './components/Login/LoginScreen';
import Navbar from './components/Navbar/Navbar';
import SignUp from './components/SignUp/SignUp';
import MyCart from './components/MyCart/MyCart';
import Home from './components/Home/Home';
import Delivary  from './components/Delivary/Delivary';
import Payment  from './components/Payment/Payment';
import { useStateValue } from "./StateProvider"; 
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
//import Axios from './Axios';
import { auth } from './firebase';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';



function App() {
  const [{ user }, dispatch] = useStateValue();
  const [isLogin, setisLogin] = useState(false);
  const [isSignup, setisSignup] = useState(false);
  const [userExist,setUserExist] = useState(null);

  // // Stripe Public Key
  // const options = {
  //   // passing the client secret obtained from the server
  //   clientSecret: 'sk_test_51I58GvJWvOCl4irEXh0wXUHgEAImIjWRy4ylnvVEWB5UpO1r9nzMhMVVR8YYOHtQNUNoSU5yBSRFwxeVJc56pbYz00PUHd5fa2',
  // };
  const stripePromise = loadStripe('pk_test_51I58GvJWvOCl4irEO2H3oQFoz4qlPswYVCXWl27k0qw36Pmszet7Yh7cL7ahoBgv3q87dRI7b95cRV3CoKpsADez00QVG3vBKV');
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // the user just logged in / the user was logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
        setUserExist(authUser);
        console.log("authhuser>>>", userExist);
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
        dispatch({
          type:"EMPTY_CART"
        })
      }
    });
    console.log('useEffect>>user>>',user)
  },[]);
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/cart'>
              <Navbar
              setLogin={() =>{ setisLogin(!isLogin) }}
              setSignup={() =>{ setisSignup(!isSignup) }}
            />
            <br/><br/><br/>
            <MyCart />
          </Route>

          <Route path="/delivary-location">
        
          <Delivary />
          
          </Route>

          <Route path="/payment">
          <Elements stripe={stripePromise}>
            <Payment />
          </Elements>
          </Route>
  
          
          <Route path="/">
            <Navbar
              setLogin={() =>{ setisLogin(!isLogin) }}
              setSignup={() =>{ setisSignup(!isSignup) }}
            />
            {
              isSignup &&
              <SignUp
                show={isSignup}
                onHide={() => setisSignup(false)}
                openLogin={() => setisLogin(true)}
              />
            }
            {
              isLogin &&
                <LoginScreen
                  show={isLogin}
                  onHide={() => setisLogin(false)}
                  openSignup={() => setisSignup(true)}
                />               
            }
            <Home/>
          </Route>
        </Switch>
      </Router>
  
    </div>
  );
}

export default App;
