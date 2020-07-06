import React from 'react';
import './styles/tutorials.scss';
import BackHome from '../navbar/backHome';
import BasicShapes from './basicShapes/basic_shapes';

function Tutorials() {
	return (
		<div id="tutorials" className="tutorials__container">
			<BackHome />
			<BasicShapes />
		</div>
	);
}

export default Tutorials;
