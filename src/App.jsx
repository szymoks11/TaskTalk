import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Forgot from "./pages/forgot/Forgot";
import Tables from "./pages/tables/Tables";
import Test from "./pages/test/Test";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/forgot' element={<Forgot/>}/>
        <Route path='/tables' element={<Tables/>}/>
        <Route path='/test' element={<Test/>}/>

      </Routes>
    
    </BrowserRouter>
  )

  
  
};

export default App;
