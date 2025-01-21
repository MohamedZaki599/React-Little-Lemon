import "./App.css"
import React from "react"
import Nav from "./components/Nav"
import Header from "./components/Header"
import Main from "./components/Main"
import Menu from "./components/Menu"
import Footer from "./components/Footer"
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
	return (
		<Router>
			<Nav />
			<Header />
			<Main />
			<Menu />
			<Footer />
		</Router>
	)
}

export default App
