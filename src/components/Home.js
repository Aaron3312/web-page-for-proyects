// components/Home.js
import React, { useRef, useEffect } from "react";
import logo from "./../images/logoRaton.jpg";
import clickSound from "./../sound/grito.mp3";

function Home() {
	const audioRef = useRef(null);
	const imgRef = useRef(null);

	useEffect(() => {
		const handleClick = () => {
			if (audioRef.current) {
				audioRef.current.currentTime = 0;
				audioRef.current.play();
			}

			// Efecto visual adicional al hacer clic
			if (imgRef.current) {
				imgRef.current.style.transform = "scale(0.9) rotate(-5deg)";
				setTimeout(() => {
					imgRef.current.style.transform = "";
				}, 200);
			}
		};

		const handleMouseLeave = () => {
			if (audioRef.current) {
				audioRef.current.pause();
				audioRef.current.currentTime = 0;
			}
		};

		const imgElement = imgRef.current;
		if (imgElement) {
			imgElement.addEventListener("click", handleClick);
			imgElement.addEventListener("mouseleave", handleMouseLeave);
		}

		return () => {
			if (imgElement) {
				imgElement.removeEventListener("click", handleClick);
				imgElement.removeEventListener("mouseleave", handleMouseLeave);
			}
		};
	}, []);

	return (
		<div className="home-container">
			<h1>Hello there👋, I'm</h1>
			<p className="titleName">Aaron 📷</p>
			<img ref={imgRef} src={logo} alt="logo" className="imgRaton" />
			<audio ref={audioRef} src={clickSound} />
		</div>
	);
}

export default Home;
