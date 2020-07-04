import React from 'react';
import './styles/tutorials.scss';
import BackHome from '../navbar/backHome';
// import Navbar from '../navbar/navbar';

function Tutorials() {
	return (
		<div id="tutorials" className="tutorials__container">
			<BackHome />
			<div id="tutorials__section">
				<h1>Tutorials</h1>
			</div>
		</div>
	);
}

export default Tutorials;
