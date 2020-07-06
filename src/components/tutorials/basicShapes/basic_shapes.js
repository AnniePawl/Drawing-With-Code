import React from 'react';
import Circle from './circle';
import Square from './square';
import Triangle from './triangle';
import Trapazoid from './trapazoid';
import { HashLink } from 'react-router-hash-link';
// import { withRouter, Link } from 'react-router-dom';
import '../styles/basicShapes.scss';

function BasicShapes() {
	return (
		<div className="basic_shapes__container">
			<h1 id="basic_shapes">Basic Shapes</h1>
			{/* Basic Shapes Navigation*/}
			{/* Circle */}
			<div className="basic_shapes__shapes_container">
				<HashLink smooth to="#circle">
					<div className="basic_shapes__circle" />
				</HashLink>
				{/* Square */}
				<HashLink smooth to="#square">
					<div className="basic_shapes__square" />
				</HashLink>
				{/* Triangle */}
				<HashLink smooth to="#triangle">
					<div className="basic_shapes__triangle" />
				</HashLink>
				{/* Trapazoid */}
				<HashLink smooth to="#trapazoid">
					<div className="basic_shapes__trapazoid" />
				</HashLink>
			</div>

			{/* Circle*/}
			<div className="basic_shapes__circle_container" id="circle">
				<h2>Circle</h2>
				<HashLink smooth to="#basic_shapes">
					<h4>Back to Basic Shapes</h4>
				</HashLink>

				<Circle />
			</div>
			{/* Square */}
			<div className="basic_shapes__square_container" id="square">
				<h2>Square</h2>
				<HashLink smooth to="#basic_shapes">
					<h4>Back to Basic Shapes</h4>
				</HashLink>
				<Square />
			</div>

			<div className="basic_shapes__triangle_container" id="triangle">
				<h2>Triangle</h2>
				<HashLink smooth to="#basic_shapes">
					<h4>Back to Basic Shapes</h4>
				</HashLink>
				<Triangle />
			</div>

			<div className="basic_shapes__triangle_container" id="trapazoid">
				<h2>Trapazoid</h2>
				<HashLink smooth to="#basic_shapes">
					<h4>Back to Basic Shapes</h4>
				</HashLink>
				<Trapazoid />
			</div>
		</div>
	);
}

export default BasicShapes;
