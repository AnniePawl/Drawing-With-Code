import React from 'react';
import { HashLink } from 'react-router-hash-link';
import './styles/navbar.scss';

function BackHome() {
	return (
		<div className="backHome">
			<ul>
				<li>
					<HashLink smooth to="/">
						Home
					</HashLink>
				</li>
			</ul>
		</div>
	);
}

export default BackHome;
