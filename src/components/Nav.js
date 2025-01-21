import React from "react"
import Logo from "../assets/Logo.svg"
const Nav = () => {

  const [menuOpen, setMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }

  return (
		<nav className={`navbar ${menuOpen ? "open" : ""}`}>
			<a href="/" className="logo">
				<img src={Logo} alt="Little Lemon Logo" />
			</a>

			{/* Mobile Nav */}
			<div className="menu-icon" onClick={toggleMenu}>
				<div className="bar"></div>
				<div className="bar"></div>
				<div className="bar"></div>
			</div>

			{/*  Nav Items */}
			<ul className={`nav-links ${menuOpen ? "visible" : ""}`}>
				<li>
					<a href="/">Home</a>
				</li>
				<li>
					<a href="/about">About</a>
				</li>
				<li>
					<a href="/services">Services</a>
				</li>
				<li>
					<a href="/menu">Menu</a>
				</li>
				<li>
					<a href="/booking">Reservations</a>
				</li>
				<li>
					<a href="/order">Order</a>
				</li>
				<li>
					<a href="/login">Login</a>
				</li>
			</ul>
		</nav>
	)
}

export default Nav
