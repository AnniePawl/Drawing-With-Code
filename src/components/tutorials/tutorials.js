import React from 'react';
import './styles/tutorials.scss';
import Navbar from '../navbar/navbar';

function Tutorials() {
	return (
		<div id="tutorials" className="tutorials__container">
			<Navbar />
			<div id="tutorials__section">
				<h1>Tutorials</h1>
			</div>
		</div>
	);
}

export default Tutorials;
