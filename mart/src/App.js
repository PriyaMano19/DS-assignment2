import "./App.css";
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import Product from './components/Product';
import Home  from  './components/Home';
import Products from "./components/Products";
import Cart from "./components/Cart";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Contactus from "./components/Contactus";
import Aboutus from "./components/Aboutus";

import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
      <Navbar />
     
  <Routes>
      <Route path="/"  element={<Home />}/>
       <Route path="/products" element={<Products/>}/>
       <Route path="/products/:id" element={<Product/>}/>
         <Route path="/cart" element={<Cart/>}/>
                <Route path="/login" element={<Login/>}/>
                 <Route path="/contact" element={<Contactus/>}/>
                  <Route path="/about" element={<Aboutus/>}/>
                   <Route path="/register" element={<Signup/>}/>
           
 
  
 
  
</Routes>



      <></>
     
     </>


     
  
  );
}

export default App;
