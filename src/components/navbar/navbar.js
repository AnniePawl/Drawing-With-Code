import React from 'react';
import './styles/navbar.scss';
import { HashLink } from 'react-router-hash-link';
import { withRouter } from 'react-router-dom';

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
					<HashLink smooth to="/#about">
						About
					</HashLink>
				</li>
				<li>
					<HashLink smooth to="/#resources">
						Resources
					</HashLink>
				</li>

				<li>
					<HashLink smooth to="/tutorials/#tutorials__section">
						Tutorials
					</HashLink>
				</li>
			</ul>
		</div>
	);
}

export default Navbar;
