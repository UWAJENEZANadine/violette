import React from "react";
import "./header.css"

const Header =()=>{
    return (
       <nav className="navbar navbar-dark navbar-expand-sm tag-container ">
		   <div className="container">
			   <div className="navbar-brand header-container">PORTIFOLIO</div>
					<div className="navbar-nav header-container ">
						<a className="nav-item nav-link active" href="home">Home</a>
						<a className="nav-item nav-link" href="contact">Contact</a>
						<a className="nav-item nav-link" href="about">About Me</a>

					</div>
			</div>
	   </nav>
         
    );
}

export default Header