import React from "react"

import footerLogo from "../assets/footer-logo.png"
import { FaFacebook } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa"
import { FaPhone } from "react-icons/fa"
import { MdEmail } from "react-icons/md"
import { FaAddressCard } from "react-icons/fa"

function Footer() {
	return (
		<footer className="footer" id="footer">
			<section>
				<div className="company-info">
					<img src={footerLogo} alt="Little Lemon logo" />
					<h3>Little Lemon</h3>
					<p>
						We are a family owned Mediterranean restaurant, focused on
						traditional recipes served with a modern twist.
					</p>
					<p>© 2025 Little Lemon. All rights reserved.</p>
				</div>
				<div className="navigation-links">
					<h3>Important Links</h3>
					<ul>
						<li>
							<a href="./">Home</a>
						</li>

						<li>
							<a href="#menu">Menu</a>
						</li>
						<li>
							<a href="booking">Reservations</a>
						</li>
						<li>
							<a href="order">Order Online</a>
						</li>
						<li>
							<a href="#footer">About</a>
						</li>
					</ul>
				</div>

				<div className="contact-info">
					<h3>Contact Us</h3>
					<ul>
						<li>
							<FaAddressCard />
							<span>Address: 1234 Lemon Way, Chicago, IL 12345</span>
						</li>
						<li>
							<FaPhone />
							<span>Phone: 123-456-7890</span>
						</li>
						<li>
							<MdEmail />
							<span>Email: little@lemon.com</span>
						</li>
					</ul>
				</div>

				<div className="social-media-links">
					<h3>Follow Us</h3>
					<ul>
						<li>
							<FaFacebook /> <a href="https://www.facebook.com">Facebook</a>
						</li>
						<li>
							<FaInstagram /> <a href="https://www.instagram.com">Instagram</a>
						</li>
						<li>
							<FaTwitter /> <a href="https://www.twitter.com">Twitter</a>
						</li>
					</ul>
				</div>
			</section>
		</footer>
	)
}

export default Footer
