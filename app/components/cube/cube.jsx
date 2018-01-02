import React from 'react';
import './cube.scss';

class Cube extends React.Component {
	render(){
		return (
			<div className="cube">
				<div className="para top"></div>
				<div className="para bottom-left"></div>
				<div className="para bottom-right"></div>
				<div className="para top back"></div>
				<div className="para bottom-left back"></div>
				<div className="para bottom-right back"></div>
			</div>
		);
	}
};
export default Cube