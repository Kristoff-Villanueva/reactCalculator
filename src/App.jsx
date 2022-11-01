import React, { useState } from "react";
import "./App.css";

function App() {
	const [screen, setScreen] = useState(0);

	function digitClick(event) {
		setScreen((prevScreen) => {
			if (prevScreen === 0) {
				return event.target.textContent;
			} else {
				return prevScreen + event.target.textContent;
			}
		});
	}

	function plusClick() {
		setScreen;
	}

	return (
		<div className="container">
			<div className="screen">{screen}</div>
			<p className="digits" onClick={digitClick}>
				7
			</p>
			<p className="digits" onClick={digitClick}>
				8
			</p>
			<p className="digits" onClick={digitClick}>
				9
			</p>
			<p className="vertical-keys plus" onClick={plusClick}>
				+
			</p>
			<p className="digits" onClick={digitClick}>
				4
			</p>
			<p className="digits" onClick={digitClick}>
				5
			</p>
			<p className="digits" onClick={digitClick}>
				6
			</p>
			<p className="digits" onClick={digitClick}>
				1
			</p>
			<p className="digits" onClick={digitClick}>
				2
			</p>
			<p className="digits" onClick={digitClick}>
				3
			</p>
			<p className="vertical-keys enter">=</p>
			<p className="horizontal-keys">0</p>
			<p className="other-keys" onClick={digitClick}>
				.
			</p>
			<p className="other-keys">C</p>
			<p className="other-keys cancel">AC</p>
			<p className="other-keys">/</p>
			<p className="other-keys">*</p>
			<p className="other-keys">-</p>
		</div>
	);
}

export default App;
