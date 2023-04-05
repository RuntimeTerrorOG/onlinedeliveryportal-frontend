import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import Profile from "./components/Profile";
import BoardUser from "./components/BoardUser";
import BoardDeliveryPerson from "./components/BoardDeliveryPerson";
import BoardAdmin from "./components/BoardAdmin";
import  Admin  from './components/Admin';
import ForgotPassword from './components/ForgotPassword';
import  ResetPassword  from './components/ResetPassword';

import { logout } from "./slices/auth";

import EventBus from "./common/EventBus";




const App = () => {
  //'useState' used to declare and initialize three state variables
  const [showDeliveryPersonBoard, setShowDeliveryPersonBoard] = useState(false);
  const [showAdminBoard, setShowAdminBoard] = useState(false);

  //'useSelector' is used to retrieve data from the Redux store
  const { user: currentUser } = useSelector((state) => state.auth);
  
  // Get 'dispatch' function from Redux store using the 'useDispatch' hook
  const dispatch = useDispatch();


  //a function for 'logging out' and 'dispatch' it when needed
  const logOut = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);

  useEffect(() => {

    //set the 'showDeliveryPersonBoard' and 'showAdminBoard' state variables based on their 'roles'
    if (currentUser) {
      setShowDeliveryPersonBoard(currentUser.roles.includes("ROLE_DELIVERY"));
      setShowAdminBoard(currentUser.roles.includes("ROLE_ADMIN"));
    } 
    
    // If no current user, hide the delivery and admin boards
    else {
      setShowDeliveryPersonBoard(false);
      setShowAdminBoard(false);
    }


    // Set up an event listener to log out when a "logout" event is emitted
    EventBus.on("logout", () => {
      logOut();
    });

    // Clean up any event listeners or timers set up in the effect
    return () => {
      EventBus.remove("logout");
    };
  }, [currentUser, logOut]);




  
  return (
    <Router>

      {/*navbar from here*/}

      <div>
        <nav className="navbar navbar-expand bg-color">
          <Link to={"/"} className="navbar-brand">
          <img src='./images/logo4.jpg' alt='' />
          </Link>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/home"} className="nav-link">
                Home
              </Link>
            </li>

            {showDeliveryPersonBoard && (
              <li className="nav-item">
                <Link to={"/delivery"} className="nav-link">
                  DeliveryPerson Board
                </Link>
              </li>
            )}

            {showAdminBoard && (
              <li className="nav-item">
                <Link to={"/admin"} className="nav-link">
                  Admin Board
                </Link>
              </li>
            )}

            {currentUser && (
              <li className="nav-item">
                <Link to={"/user"} className="nav-link">
                  User
                </Link>
              </li>
            )}
          </div>

          {currentUser ? (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/profile"} className="nav-link">
                  {currentUser.username}
                </Link>
              </li>
              <li className="nav-item">
                <a href="/login" className="nav-link" onClick={logOut}>
                  LogOut
                </a>
              </li>
            </div>
          ) : (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/login"} className="nav-link">
                  Login
                </Link>
              </li>

              <li className="nav-item">
                <Link to={"/register"} className="nav-link">
                  Sign Up
                </Link>
              </li>
            </div>
          )}
        </nav>




        {/* path to the releavent pages */}

        <div className="container mt-3">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/user" element={<BoardUser />} />
            <Route path="/delivery" element={<BoardDeliveryPerson />} />
            <Route path="/admin" element={<BoardAdmin />} />
            <Route path='/adminlogin' element={<Admin/>}/>
            <Route path='/forgotpassword' element={<ForgotPassword />}/>
            <Route path='/resetpassword' element={<ResetPassword/>}/>


          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
