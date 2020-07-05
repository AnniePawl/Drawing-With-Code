import React from 'react';
import Buttons from './buttons';
import { Link } from 'react-router-dom';
import './styles/about.scss';

function AboutMe() {
	return (
		<div className="about_me__container">
			<h1>About Me</h1>
			{/* Profile Buttons Component */}
			<div className="about_me__buttons">
				<Buttons />
			</div>

			{/* <h4 className="about_me__text">Made With ♥ By</h4>
			<h4 className="landing_page_name">
				<Link className="name" to="/">
					ANNA PAWL
				</Link>
			</h4> */}
		</div>
	);
}

export default AboutMe;
