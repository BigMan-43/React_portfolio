import React from "react"
import './mycss.css'

function Navbar(){
    return(
		<>
		<div className="navbar-main">
				<nav className="navbar">
				<span ><a href="#">Gaurav</a></span>
				<div className="div-navbar">
				<ul>
					<li><a href="#">Home</a></li>
					<li><a href="#">About</a></li>
					<li><a href="#">Skills</a></li>
					<li><a href="#">Contact</a></li>
				</ul>
				</div>
				</nav>
		</div>
		</>
    )
}

export default Navbar