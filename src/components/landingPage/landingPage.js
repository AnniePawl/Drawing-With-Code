import React from 'react';
import './styles/landingPage.scss';
import Navbar from '../navbar/navbar';
import Home from '../home/home';
import Resources from '../resources/resources';

function LandingPage() {
	return (
		<div className="landing_page_container">
			<Navbar />

			{/* Home Container */}
			<div id="home" className="home__section">
				<Home />
			</div>

			{/* Resources Container */}
			<div id="resources" className="resources__section">
				<Resources />
			</div>
		</div>
	);
}

export default LandingPage;
