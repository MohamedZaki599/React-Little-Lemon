import React, { useReducer } from "react"
import { Route, Routes, useNavigate } from "react-router-dom"
import Header from "./Header"
import Booking from "./Booking"
import ConfirmedBooking from "./ConfirmedBooking"

const seedRandom = function (seed) {
	var m = 2 ** 35 - 31
	var a = 185852
	var s = seed % m
	return function () {
		return (s = ((s * a) % m) / m)
	}
}

const fetchAPI = function (date) {
	let result = []
	let random = seedRandom(date.getDate())

	for (let i = 17; i <= 22; i++) {
		if (random() < 0.5) {
			result.push(i + ":00")
		}
		if (random() < 0.5) {
			result.push(i + ":30")
		}
	}
	return result
}

const initializeTimes = {
	availableTimes: ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"],
}

const updateTimes = (state, action) => {
	switch (action.type) {
		case "UPDATE_TIMES":
			return { ...state, availableTimes: fetchAPI(action.payload) }
		default:
			return state
	}
}

const Main = () => {
	const navigate = useNavigate()
	const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes)

	const submitForm = (formData) => {
		if (formData) {
			navigate("/confirmed-booking")
			return true
		}
		return false
	}

	return (
		<main>
			<Routes>
				<Route path="/" element={<Header />} />
				<Route
					path="/booking"
					element={
						<Booking
							availableTimes={availableTimes.availableTimes}
							dispatch={dispatch}
							submitForm={submitForm}
						/>
					}
				/>
				<Route path="/confirmed-booking" element={<ConfirmedBooking />} />
			</Routes>
		</main>
	)
}

export default Main
