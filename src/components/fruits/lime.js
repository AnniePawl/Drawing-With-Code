import React from 'react';
import './styles/lime.scss';

function Lime() {
	return (
		// lime Container
		<div className="lime_container">
			<div className="total">
				<div className="total_lime">
					<div className="lime_shading" />

					<div className="lime">
						{/* lime Nobs/ Leaf */}
						<div className="lime_nobs">
							<div className="lime_leaf" />
							<div className="lime_top_nob">
								<div className="lime_top_nob_shading" />
								<div className="lime_top_bud" />
							</div>
							<div className="lime_bottom_nob">
								<div className="lime_bottom_nob_shading" />
								<div className="lime_bottom_bud" />
							</div>
						</div>
					</div>
				</div>
				<div className="lime_shadow" />
			</div>
		</div>
	);
}

export default Lime;
