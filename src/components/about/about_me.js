import React from 'react';
import Buttons from './buttons';
import { Link } from 'react-router-dom';
import './styles/about.scss';

function AboutMe() {
	return (
		<div className="about_me__hero">
			{/* Profile Buttons Component */}
			<div className="about_me__buttons">
				<Buttons />
			</div>
			Landing Page Text
			<h4 className="about_me__text">Made With ♥ By</h4>
			{/* Link to Portfolio Site */}
			<h4 className="landing_page_name">
				<Link className="name" to="/">
					ANNA PAWL
				</Link>
			</h4>
		</div>
	);
}

export default AboutMe;
