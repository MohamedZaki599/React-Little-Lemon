import "./App.css"
import React from "react"
import Nav from "./components/Nav"
// import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"
import { BrowserRouter as Router } from "react-router-dom"

function App() {
	return (
		<Router>
			<Nav />
			{/* <Header /> */}
			<Main />
			<Footer />
		</Router>
	)
}

export default App
