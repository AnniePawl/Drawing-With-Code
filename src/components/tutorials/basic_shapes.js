import React from 'react';
import './styles/basicShapes.scss';

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
		</div>
	);
}

export default BasicShapes;
