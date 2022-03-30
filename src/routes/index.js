import React from "react";
import Home from "../views/home";
import Contact from "../views/contact";
import { Routes, Route } from "react-router-dom";
import About from "../views/about";


const index = ()=>{
    return(
        <Routes>
            <Route element={<Home />} path ="/"></Route>
            <Route element={<Home />} path="/home"></Route>
            <Route element={<Contact />} path ="/contact" ></Route>
            <Route element={<About />} path="/about"></Route>


        </Routes>

    );
}

export default index

