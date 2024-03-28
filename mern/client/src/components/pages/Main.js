import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from '../pages/Home';
import Signup from '../pages/Signup';
import Login from '../pages/Login';
import Account from '../pages/Account';
import Passwords from '../pages/Passwords';

const Main = () => {
  return (
    <Router>
      <Routes> {/* The Switch decides which component to show based on the current URL.*/}
        <Route exact path='/' element={<Home/>}></Route>
        <Route exact path='/signup' element={<Signup/>}></Route>
        <Route exact path='/login' element={<Login/>}></Route>
        <Route exact path='/account' element={<Account/>}></Route>
        <Route exact path='/passwords' element={<Passwords/>}></Route>
      </Routes>
    </Router>
    
  );
}

export default Main;