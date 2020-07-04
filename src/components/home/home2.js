// Original Home - Saving just in case I want to go back ....

import React from 'react';
import Pom from '../fruits/pom';
import './styles/home.scss';
import './styles/stars.scss';

function Home() {
	return (
		<div className="home__container">
			{/* Home Heading */}
			<div className="home__heading">
				<h1>CSS ART</h1>
				<h2> A Guide to Drawing with Code</h2>
			</div>
			{/* Pom Container */}
			<div className="pom__container">
				<Pom />
			</div>

			{/* Stars */}
			<div className="stars">
				<div class="particle particle-1" />
				<div class="particle particle-2" />
				<div class="particle particle-3" />
				<div class="particle particle-4" />
			</div>
		</div>
	);
}

export default Home;
