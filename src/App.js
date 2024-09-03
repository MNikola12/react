import React from "react";
import Navbar from './Components/Navbar';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import './App.css';
import Home from './Components/Pages/Home';
import Services from "./Components/Pages/Services";
import Products from "./Components/Pages/Products";
import SignUp from "./Components/Pages/SignUp";

function App(){

   return(<>
   <Router>
      <Navbar/>
      <Routes>
      <Route path='/' exact element={ <Home />}></Route>
      <Route path='/services' exact element={ <Services />}></Route>
      <Route path='/Products' exact element={ <Products />}></Route>
      <Route path='/Sign-Up' exact element={ <SignUp />}></Route>
      </Routes>
   </Router>
   
   </>);
}

export default App