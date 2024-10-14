// App.js
import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Portfolio from "./components/Portfolio";
import CV from "./components/Cv.js";
import Contact from "./components/Contact";
import Home from "./components/Home";
import BasicTabs from "./navigation.js";

function App() {
	return (
		<Router>
			<div className="App">
				<BasicTabs />
				{/* <Routes>
					<Route path="/" element={<Home />} />
					<Route path="/portfolio" element={<Portfolio />} />
					<Route path="/cv" element={<CV />} />
					<Route path="/contact" element={<Contact />} />
				</Routes> */}
			</div>
		</Router>
	);
}

export default App;
