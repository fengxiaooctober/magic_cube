import React, {Component} from 'react';
import './magicCube.scss';

class MagicCube extends Component{
    constructor(props) {
        super(props);
    }
    render(){
        let list = (length, classPos) => {
            var res = [];
            for(var i = 0; i < length; i++) {
                res.push(<div className={classPos + ' squre pos_' + i} key={i}>{i+1}</div>)
            }
            return res;
        }
        return (
        <div className="magic-cube" style={{transform: 'rotateX(' + this.props.transform.rotateX + 'deg) rotateY(' + this.props.transform.rotateY + 'deg) rotateZ(' + this.props.transform.rotateZ + 'deg)'}}>
            {list(9, 'top')}
            {list(9, 'bottom')}
            {list(9, 'left')}
            {list(9, 'right')}
            {list(9, 'front')}
            {list(9, 'back')}
        </div>
        )
    }
}

export default MagicCube;