import React from "react"
import BookingForm from "./BookingForm"

const Booking = ({ availableTimes, dispatch, submitForm }) => {
	return (
		<div className="booking-container" id="booking">
			<h1>Booking</h1>
			<BookingForm
				availableTimes={availableTimes}
				dispatch={dispatch}
				submitForm={submitForm}
			/>
		</div>
	)
}

export default Booking
