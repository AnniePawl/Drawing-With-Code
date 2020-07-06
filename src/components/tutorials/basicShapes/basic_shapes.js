import React from 'react';
import Circle from './circle';
import Square from './square';
import Triangle from './triangle';
import Trapazoid from './trapazoid';

import '../styles/basicShapes.scss';

function BasicShapes() {
	return (
		<div className="basic_shapes__container">
			<h1>Basic Shapes</h1>
			{/* CSS Shapes  */}
			<div className="basic_shapes__shapes_container">
				<div className="basic_shapes__circle" />
				<div className="basic_shapes__square" />
				<div className="basic_shapes__triangle" />
				<div className="basic_shapes__trapazoid" />
			</div>

			{/* Circle*/}
			<div className="basic_shapes__circle_container">
				<h2>Circle</h2>
				<Circle />
			</div>
			{/* Square */}
			<div className="basic_shapes__square_container">
				<h2>Square</h2>
				<Square />
			</div>

			<div className="basic_shapes__triangle_container">
				<h2>Triangle</h2>
				<Triangle />
			</div>

			<div className="basic_shapes__triangle_container">
				<h2>Trapazoid</h2>
				<Trapazoid />
			</div>
		</div>
	);
}

export default BasicShapes;
