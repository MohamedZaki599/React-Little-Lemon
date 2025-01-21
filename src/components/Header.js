import React from "react"
import { Link } from "react-router-dom"
import bannerImg from "../assets/restauranfood.jpg"

const Header = () => {
	return (
		<header className="header">
			<section>
				{/* banner texts */}
				<div className="banner">
					<h2>Little Lemon</h2>
					<h3>Chicago</h3>
					<p>
						We are a family owned Mediterranean restaurant, focused on
						traditional recipes served with a modern twist.
					</p>
					{/* banner button */}
					<Link to="/booking">
						<button aria-label="On Click">Reserve a Table</button>
					</Link>
				</div>
				<div className="banner-img">
					<img src={bannerImg} alt="Little Lemon restaurant food" />
				</div>
			</section>
		</header>
	)
}

export default Header
