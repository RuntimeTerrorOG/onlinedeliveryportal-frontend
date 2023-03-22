import React, {useState} from 'react';
import {BrowserRouter as Router,  Routes, Route } from 'react-router-dom';
import './App.css';
import { Login } from './Pages/Login';
import { Register } from './Pages/Register';
import { Admin } from './Pages/Admin';
import { ResetPassword } from './Pages/ResetPassword';
import ForgotPassword from './Pages/ForgotPassword';



function App() {
  const [currentForm, setCurrentForm] = useState('login');
  
  const toggleForm = (formName) => {
    setCurrentForm(formName);

  }

  return (
    
      <Router>
       
        
          <Routes>
          <Route path='/' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/admin' element={<Admin/>}/>
            <Route path='/resetpassword' element={<ResetPassword/>}/>
            <Route path='/forgotpassword' element={<ForgotPassword />}/>

          </Routes>
        
      
      </Router>
    
  );
}

export default App;
