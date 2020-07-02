import React from 'react';
import Pom from './pom'
import './styles/home.scss';

function Home() {
	return (
		<div className="home__container">
			{/* Home Heading */}
			<div className='home__heading'>
				<h1>CSS ART</h1>
				<h2> A Guide to Drawing with Code</h2>
			</div>
			{/* Pom Container */}
			<div className='pom__container'>
				<Pom/>
			</div>
		</div>
	);
}

export default Home;
