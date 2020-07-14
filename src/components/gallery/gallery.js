import React from 'react';
import BackHome from '../navbar/backHome';
import './styles/gallery.scss';

function Tutorials() {
	return (
		<div id="gallery" className="gallery__container">
			<BackHome />
			<div id="gallery__section">
				<h1 className='gallery__heading'>Gallery</h1>
			</div>
		</div>
	);
}

export default Tutorials;
