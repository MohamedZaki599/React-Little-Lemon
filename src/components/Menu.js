import React from "react"
import recipes from "../recipes"
import Swal from "sweetalert2"

const Menu = () => {
	const handleOrder = (id) => {
		Swal.fire({
			title: "Are you sure you want to order this?",
			text: "You won't be able to revert this!",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Yes, order it!",
		}).then((result) => {
			if (result.isConfirmed) {
				Swal.fire({
					title: "Ordered!",
					text: "Your order has been placed.",
					icon: "success",
				})
			}
		})
	}

	return (
		<div className="menu-container" id="menu">
			<div className="menu-header">
				<h2>This Weeks Specials!</h2>
				<button>Order Now</button>
			</div>
			{/* Add Menu Cards */}

			<div className="cards">
				{recipes.map((recipe) => (
					<div key={recipe.id} className="menu-items">
						<img src={recipe.image} alt={recipe.title} />
						<div className="menu-content">
							<h3>{recipe.title}</h3>
							<p>${recipe.price}</p>
							<p>{recipe.description}</p>
						</div>
						<button className="orderbtn" onClick={() => handleOrder(recipe.id)}>
							Order Now
						</button>
					</div>
				))}
			</div>
		</div>
	)
}
export default Menu
