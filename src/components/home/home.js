import React from 'react';
// import Pom from './pom'
import './styles/home.scss';
import './styles/stars.scss';
import Lime from '../fruits/lime';

function Home() {
	return (
		<div className="home__container">
			{/* Home Heading */}
			<div className="home__heading">
				<h1>CSS ART</h1>
				<h2> A Guide to Drawing with Code</h2>
			</div>
			{/* Pom Container */}
			<div className="home__lime_container">
				<Lime />
			</div>

			{/* Stars */}
			{/* <div className="stars">
				<div class="particle particle-1" />
				<div class="particle particle-2" />
				<div class="particle particle-3" />
				<div class="particle particle-4" />
			</div> */}
		</div>
	);
}

export default Home;
