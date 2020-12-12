import React from "react";
import Navbar from "./component/Navbar";
import "./styles.css";
import {BrowserRouter as Router,Switch,Route}  from 'react-router-dom'
import Question from "./component/Behere";
import './App.css'
import Home from "./component/pages/Home";
import Services from "./component/pages/Services";
import Products from "./component/pages/Products";
import Signup from "./component/pages/Sign-up";
import Footer from "./component/Footer";





export default function App() {
  return (
    <div className='App' >
<Router>
  
  <Navbar></Navbar> 
 
  
  
  <Route path='/' exact component={Home}></Route>
  <Route path='/services' exact component={Services}></Route>
  <Route path='/products' exact component={Products}></Route>
  <Route path='/sign-up' exact component={Signup}></Route>
  <Footer></Footer>
  </Router>

 
  
  





    </div>
  );
}
