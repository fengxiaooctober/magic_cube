import React from 'react';
import './cubeDy.scss';

class CubeDy extends React.Component {
	render(){
		return (
			<div>
				<div className="cube-dynamic">
					<div className="para top">Left</div>
					<div className="para bottom-left">Back</div>
					<div className="para bottom-right">Top</div>
					<div className="para top back">Right</div>
					<div className="para bottom-left back">Front</div>
					<div className="para bottom-right back">Bottom</div>
				</div>
				<div className="cube-dynamic small">
					<div className="para top">左</div>
					<div className="para bottom-left">后</div>
					<div className="para bottom-right">上</div>
					<div className="para top back">右</div>
					<div className="para bottom-left back">前</div>
					<div className="para bottom-right back">下</div>
				</div>
			</div>
		);
	}
};
export default CubeDy