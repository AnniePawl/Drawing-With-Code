import React from 'react';
import './styles/navbar.scss';
import { HashLink } from 'react-router-hash-link';

function Navbar() {
	return (
		<div className="navbar">
			<ul>
				<li>
					<HashLink smooth to="/#home">
						Home
					</HashLink>
				</li>
				<li>
					<HashLink smooth to="/#resources">
						Resources
					</HashLink>
				</li>
			</ul>
		</div>
	);
}

export default Navbar;
