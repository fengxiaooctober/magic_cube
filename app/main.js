import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Cube from './components/cube/cube.jsx';
import CubeDy from './components/cubeDy/cubeDy.jsx';
import MagicCube from './components/magicCube/magicCube.jsx';

class Main extends Component{
	constructor(props) {
        super(props);
        this.state = {
            transform: {
                rotateX: -30,
                rotateY: 30,
                rotateZ: 0
            }
		};
		this.onSetRotate = this.onSetRotate.bind(this);
		this.onClearRotate = this.onClearRotate.bind(this);
    }
    setTransform(direction, value){
		let stateObj = Object.assign({}, this.state);
		let key = 'rotate' + direction.toUpperCase();
		stateObj.transform[key] = value;
        this.setState(stateObj);
    }
	render(){
		 return <div>
			<div><MagicCube transform={this.state.transform} /></div>
			<div>
				<button onMouseDown={this.onSetRotate.bind(this,'+', 'X')} onMouseUp={this.onClearRotate}>x +</button>
				<button onMouseDown={this.onSetRotate.bind(this,'-', 'X')} onMouseUp={this.onClearRotate}>x -</button>
			</div>
			<div>
				<button onMouseDown={this.onSetRotate.bind(this,'+', 'Y')} onMouseUp={this.onClearRotate}>y +</button>
				<button onMouseDown={this.onSetRotate.bind(this,'-', 'Y')} onMouseUp={this.onClearRotate}>y -</button>
			</div>
			<div>
				<button onMouseDown={this.onSetRotate.bind(this,'+', 'Z')} onMouseUp={this.onClearRotate}>z +</button>
				<button onMouseDown={this.onSetRotate.bind(this,'-', 'Z')} onMouseUp={this.onClearRotate}>z -</button>
			</div>
		</div>
	}
	onSetRotate(sign, direction, event){
		this.handlerRotate = setInterval(function(){
			this.setTransform(direction, (this.state.transform['rotate' + direction] + (sign=='-'?-10:10)));
		}.bind(this), 100);
	}
	onClearRotate(){
		clearInterval(this.handlerRotate);
		this.handlerRotate = undefined;
	}
}
ReactDOM.render(
	<Main />,
	document.getElementById('content')
);