import React from 'react';
// CUSTOM BUTTON IMPORTS
import codepen from './customButtons/codepen.svg';
import dribbble from './customButtons/dribbble.svg';
import github from './customButtons/github.svg';
import linkedin from './customButtons/linkedin.svg';
import medium from './customButtons/medium.svg';
import './styles/about.scss';

function Buttons() {
	return (
		<div>
			{/* Github Button */}
			<a className="profile__link" href="https://github.com/AnniePawl" target="_blank">
				<img alt="github" className="about_me__button" src={github} />
			</a>

			{/* LinkedIn Button */}
			<a className="profile__link" href="https://www.linkedin.com/in/annapawl/" target="_blank">
				<img alt="linkedin" className="about_me__button" src={linkedin} />
			</a>

			{/* Medium Button */}
			<a className="profile__link" href="https://medium.com/@annapawl" target="_blank">
				<img alt="medium" className="about_me__button" src={medium} />
			</a>

			{/* Dribbble Button */}
			<a className="profile__link" href="https://dribbble.com/annapawl" target="_blank">
				<img alt="dribbble" className="about_me__button" src={dribbble} />
			</a>

			{/* CodePen Button */}
			<a className="profile__link" href="https://codepen.io/annampawl" target="_blank">
				<img alt="codepen" className="about_me__button" src={codepen} />
			</a>
		</div>
	);
}

export default Buttons;
