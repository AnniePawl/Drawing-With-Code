import React from 'react';
// import Lime from './lime'
import Buttons from './buttons';
import Pom from '../fruits/pom';

import './styles/about.scss';

function About() {
	return (
		<div className="about__container">
			<div className="about__content">
				<h1>About</h1>
			</div>
			{/* Lime Container */}
			<div>{/* <Pom /> */}</div>
			{/* Buttons */}
			<div>{/* <Buttons/> */}</div>
		</div>
	);
}

export default About;
