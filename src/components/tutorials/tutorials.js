import React from 'react';
import './styles/tutorials.scss';
import BackHome from '../navbar/backHome';
import BasicShapes from './basic_shapes';

function Tutorials() {
	return (
		<div id="tutorials" className="tutorials__container">
			<BackHome />
			<h1>Tutorials</h1>
			<BasicShapes />
		</div>
	);
}

export default Tutorials;
