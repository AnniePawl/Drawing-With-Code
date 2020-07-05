import React from 'react';
import AboutMe from './about_me';
import AboutProject from './about_project';
import './styles/about.scss';

function About() {
	return (
		<div className="about__container">
			<div className="about__content">
				<AboutProject />
				<AboutMe />
			</div>
		</div>
	);
}

export default About;
