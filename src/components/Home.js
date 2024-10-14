// components/Home.js
import React from "react";
import logo from "./../images/logoRaton.jpg";

function Home() {
	return (
		<div>
			<h1>Hello there👋, I’m</h1>
			<p className="titleName">Aaron 📷</p>
			<img src={logo} alt="logo" className="imgRaton" />
		</div>
	);
}

export default Home;
