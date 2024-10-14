import React, { useRef, useEffect, useState } from "react";
import logo from "./../images/logoRaton.jpg";
import clickSound from "./../sound/grito.mp3";

function Home() {
	const audioRef = useRef(null);
	const imgRef = useRef(null);
	const [isScreaming, setIsScreaming] = useState(false);

	useEffect(() => {
		const handleClick = () => {
			if (audioRef.current) {
				audioRef.current.currentTime = 0;
				audioRef.current.play();
			}

			setIsScreaming(true);

			// Movimiento errático
			const moveErratically = () => {
				if (imgRef.current && isScreaming) {
					const randomX = Math.random() * 20 - 10;
					const randomY = Math.random() * 20 - 10;
					imgRef.current.style.transform = `translate(${randomX}px, ${randomY}px) rotate(${randomX}deg)`;
					requestAnimationFrame(moveErratically);
				}
			};

			moveErratically();

			// Detener el grito y el movimiento después de 2 segundos
			setTimeout(() => {
				setIsScreaming(false);
				if (audioRef.current) {
					audioRef.current.pause();
					audioRef.current.currentTime = 0;
				}
				if (imgRef.current) {
					imgRef.current.style.transform = "";
				}
			}, 2000);
		};

		const imgElement = imgRef.current;
		if (imgElement) {
			imgElement.addEventListener("click", handleClick);
		}

		return () => {
			if (imgElement) {
				imgElement.removeEventListener("click", handleClick);
			}
		};
	}, [isScreaming]);

	return (
		<div className="home-container">
			<h1>Hello there👋, I'm</h1>
			<p className="titleName">Aaron 📷</p>
			<img
				ref={imgRef}
				src={logo}
				alt="logo"
				className={`imgRaton ${isScreaming ? "screaming" : ""}`}
			/>
			<audio ref={audioRef} src={clickSound} />
		</div>
	);
}

export default Home;
