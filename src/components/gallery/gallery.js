import React from 'react';
import BackHome from '../navbar/backHome';
import Blueberry from '../fruits/blueberry'
import Pear from '../fruits/pear'
import './styles/gallery.scss';

function Tutorials() {
	return (
		<div id="gallery" className="gallery__container">
			<BackHome />
			<div id="gallery__section">
				<h1 className='gallery__heading'>Gallery</h1>
				<Blueberry/>
				<Pear/>
			</div>
		</div>
	);
}

export default Tutorials;
