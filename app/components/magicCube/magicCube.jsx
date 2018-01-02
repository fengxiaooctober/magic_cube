import React, {Component} from 'react';
import './magicCube.scss';

class MagicCube extends Component{
    constructor(props) {
        super(props);
    }
    render(){
        const refDeg = {
            top: {      degX: 90,   degY: 0,    degZ: 0 },
            bottom: {   degX: -90,  degY: 0,    degZ: 0 },
            left: {     degX: 0,    degY: -90,   degZ: 0 },
            right: {    degX: 0,    degY: 90,   degZ: 0 },
            front: {    degX: 0,    degY: 0,    degZ: 0 },
            back: {     degX: 0,    degY: 180,  degZ: 0 }
        }
        let list = (length, classPos) => {
            let res = [];
            const arrayDegs = refDeg[classPos];
            let index = 0;
            let arraySqures = [
                {transform: 'rotateX(' + arrayDegs.degX + 'deg) rotateY(' + arrayDegs.degY + 'deg) rotateZ(' + arrayDegs.degZ + 'deg) translate3D(-' + length + 'px, -' + length + 'px, ' + length * 1.5 + 'px)'},
                {transform: 'rotateX(' + arrayDegs.degX + 'deg) rotateY(' + arrayDegs.degY + 'deg) rotateZ(' + arrayDegs.degZ + 'deg) translate3D(0px, -' + length + 'px, ' + length * 1.5 + 'px)'},
                {transform: 'rotateX(' + arrayDegs.degX + 'deg) rotateY(' + arrayDegs.degY + 'deg) rotateZ(' + arrayDegs.degZ + 'deg) translate3D(' + length + 'px, -' + length + 'px, ' + length * 1.5 + 'px)'},
                {transform: 'rotateX(' + arrayDegs.degX + 'deg) rotateY(' + arrayDegs.degY + 'deg) rotateZ(' + arrayDegs.degZ + 'deg) translate3D(-' + length + 'px, 0px, ' + length * 1.5 + 'px)'},
                {transform: 'rotateX(' + arrayDegs.degX + 'deg) rotateY(' + arrayDegs.degY + 'deg) rotateZ(' + arrayDegs.degZ + 'deg) translate3D(0px, 0px, ' + length * 1.5 + 'px)'},
                {transform: 'rotateX(' + arrayDegs.degX + 'deg) rotateY(' + arrayDegs.degY + 'deg) rotateZ(' + arrayDegs.degZ + 'deg) translate3D(' + length + 'px, 0px, ' + length * 1.5 + 'px)'},
                {transform: 'rotateX(' + arrayDegs.degX + 'deg) rotateY(' + arrayDegs.degY + 'deg) rotateZ(' + arrayDegs.degZ + 'deg) translate3D(-' + length + 'px, ' + length + 'px, ' + length * 1.5 + 'px)'},
                {transform: 'rotateX(' + arrayDegs.degX + 'deg) rotateY(' + arrayDegs.degY + 'deg) rotateZ(' + arrayDegs.degZ + 'deg) translate3D(0px, ' + length + 'px, ' + length * 1.5 + 'px)'},
                {transform: 'rotateX(' + arrayDegs.degX + 'deg) rotateY(' + arrayDegs.degY + 'deg) rotateZ(' + arrayDegs.degZ + 'deg) translate3D(' + length + 'px, ' + length + 'px, ' + length * 1.5 + 'px)'}
            ].forEach(element => {
                res.push(
                    <div className={'squre ' + classPos} style={element} key={index++}></div>
                );
            });
            return res;
        }
        return (
        <div className="magic-cube" style={{transform: 'rotateX(' + this.props.transform.rotateX + 'deg) rotateY(' + this.props.transform.rotateY + 'deg) rotateZ(' + this.props.transform.rotateZ + 'deg)'}}>
            {list(40, 'top')}
            {list(40, 'bottom')}
            {list(40, 'left')}
            {list(40, 'right')}
            {list(40, 'front')}
            {list(40, 'back')}
        </div>
        )
    }
}

export default MagicCube;