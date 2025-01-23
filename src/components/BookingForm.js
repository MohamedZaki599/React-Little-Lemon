import React, { useState } from "react"

const BookingForm = ({ availableTimes, dispatch, submitForm }) => {
	const [date, setDate] = useState("")
	const [time, setTime] = useState("")
	const [guests, setGuests] = useState("")
	const [occasion, setOccasion] = useState("")

	const handleSubmit = (e) => {
		e.preventDefault()
		if (date && time && guests && occasion) {
			submitForm({ date, time, guests, occasion })
		} else {
			alert("Please fill out all fields.")
		}
	}

	const handleDateChange = (e) => {
		setDate(e.target.value)
		dispatch({ type: "UPDATE_TIMES", payload: new Date(e.target.value) })
	}

	return (
		<section>
			<form onSubmit={handleSubmit}>
				<fieldset>
					<div>
						<label htmlFor="book-date">Select a Date:</label>
						<input
							id="book-date"
							value={date}
							onChange={handleDateChange}
							type="date"
							required
						/>
					</div>
					<div>
						<label htmlFor="book-time">Select a Time:</label>
						<select
							id="book-time"
							value={time}
							onChange={(e) => setTime(e.target.value)}
							required
						>
							<option value="">Select a time</option>
							{availableTimes.map((time, index) => (
								<option key={index} value={time}>
									{time}
								</option>
							))}
						</select>
					</div>
					<div>
						<label htmlFor="book-guests">Number of Guests:</label>
						<input
							id="book-guests"
							value={guests}
							onChange={(e) => setGuests(e.target.value)}
							type="number"
							min="1"
							max="10"
							required
						/>
					</div>
					<div>
						<label htmlFor="book-occasion">Occasion:</label>
						<select
							id="book-occasion"
							value={occasion}
							onChange={(e) => setOccasion(e.target.value)}
							required
						>
							<option value="">Select an occasion</option>
							<option value="Birthday">Birthday</option>
							<option value="Anniversary">Anniversary</option>
						</select>
					</div>
					<button type="submit">Reserve Now</button>
				</fieldset>
			</form>
		</section>
	)
}

export default BookingForm
