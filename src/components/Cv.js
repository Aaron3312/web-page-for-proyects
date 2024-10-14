// components/CV.js
import React from "react";

function CV() {
	return (
		<div>
			<h2>Mi CV</h2>
			<a
				href="https://drive.google.com/uc?export=download&id=1T8dgjCqCeWQWJc4ObL_-1M_72pUbBkrg"
				target="_blank"
				rel="noopener noreferrer"
			>
				Download CV
			</a>
			<div
				style={{
					position: "relative",
					width: "100%",
					height: 0,
					paddingTop: "129.4118%",
					boxShadow: "0 2px 8px 0 rgba(63,69,81,0.16)",
					marginTop: "1.6em",
					marginBottom: "0.9em",
					overflow: "hidden",
					borderRadius: "8px",
					willChange: "transform",
				}}
			>
				<iframe
					loading="lazy"
					style={{
						position: "absolute",
						width: "100%",
						height: "100%",
						top: 0,
						left: 0,
						border: "none",
						padding: 0,
						margin: 0,
					}}
					src="https://www.canva.com/design/DAGCnkieXWs/TnRiwzB52gF6jB3aCutuaA/view?embed"
					allowFullScreen
				></iframe>
			</div>
			<a
				href="https://www.canva.com/design/DAGCnkieXWs/TnRiwzB52gF6jB3aCutuaA/view?utm_content=DAGCnkieXWs&utm_campaign=designshare&utm_medium=embeds&utm_source=link"
				target="_blank"
				rel="noopener noreferrer"
			>
				Curriculum2.3
			</a>{" "}
			by Aaron Hernandez
		</div>
	);
}
export default CV;
