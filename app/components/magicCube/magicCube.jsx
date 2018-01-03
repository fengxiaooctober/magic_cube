import React, {Component} from 'react';
import './magicCube.scss';
class SmallCube extends Component{
    constructor(props) {
        super(props);
        props=>{length};
        if(!length){
            length = 40;
        }
    }
    render(){
        let arraySquare = [];
        let i = 0;
        [
            {
                classPos: 'top',
                transform: 'translateZ(${length}px)'.replace('${length}', length/2)
            },
            {
                classPos: 'bottom',
                transform: 'rotateY(180deg) translateZ(${length}px)'.replace('${length}', length/2)
            },
            {
                classPos: 'left',
                transform: 'rotateY(-90deg) translateZ(${length}px)'.replace('${length}', length/2)
            },
            {
                classPos: 'right',
                transform: 'rotateY(90deg) translateZ(${length}px)'.replace('${length}', length/2)
            },
            {
                classPos: 'front',
                transform: 'rotateX(90deg) translateZ(${length}px)'.replace('${length}', length/2)
            },
            {
                classPos: 'back',
                transform: 'rotateX(-90deg) translateZ(${length}px)'.replace('${length}', length/2)
            }
        ].forEach((element)=>{
            let classPos = element.classPos;
            let objStyle = {
                transform: element.transform,
                height: '${length}px'.replace('${length}', length),
                width: '${length}px'.replace('${length}', length)
            }
            console.log({objStyle});
            arraySquare.push(
                <div className={['face',classPos].join(' ')} style={objStyle} key={i}></div>
            )
            i++;
        });
        return(
            <div className="small-cube">
                {arraySquare}
            </div>
        )
    }
}
class Squre extends Component{
    constructor(props) {
        super(props);
        this.state = {
            styleObj: this.props.styleObj
        }
    }
    render(){
        return (
        <div className={'squre ' + this.props.classPos}
            style={this.state.styleObj}
            onClick={this.props.onClickSqure.bind(this.props.parent,this.props.index,this.props.classPos)}>{this.props.index}</div>
        )
    }
}
class MagicCube extends Component{
    constructor(props) {
        super(props);
        this.state = {}
        this.arraySquares = {}
    }
    render1(){
        let objStyle = {
            transform: 'rotateX(' + this.props.transform.rotateX + 'deg) rotateY(' + this.props.transform.rotateY + 'deg) rotateZ(' + this.props.transform.rotateZ + 'deg)'
        }
        return(
        <div className="magic-cube" style={objStyle}>
            <SmallCube transform={{translateX:0,translateX:30,translateX:0}}/>
            <SmallCube transform={{translateX:30,translateX:0,translateX:0}}/>
            <SmallCube transform={{translateX:0,translateX:30,translateX:30}}/>
        </div>
        )
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
            [
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
                if(!Array.isArray(this.state[classPos])){ this.state[classPos] = []; }
                this.state[classPos][index] = { transform: element.transform };
                var obj = (<Squre classPos={classPos} styleObj={element} key={index} onClickSqure={this.onClickSqure} parent={this}/>);
                if(!Array.isArray(this.arraySquares[classPos])){this.arraySquares[classPos]=[];}
                this.arraySquares[classPos][index] = {obj: obj};
                // res.push(<div className={'squre ' + classPos} style={this.state[classPos][index]} key={index} onClick={this.onClickSqure.bind(this,index,classPos)}>{index}</div>);
                res.push(obj);
                index++;
            });
            return res;
        }
        return(
        <div>
            <div className="magic-cube" style={{transform: 'rotateX(' + this.props.transform.rotateX + 'deg) rotateY(' + this.props.transform.rotateY + 'deg) rotateZ(' + this.props.transform.rotateZ + 'deg)'}}>
                {list(40, 'top')}
                {list(40, 'bottom')}
                {list(40, 'left')}
                {list(40, 'right')}
                {list(40, 'front')}
                {list(40, 'back')}
            </div>
        </div>
        )
    }
    onClickSqure(index,classPos,event){
        let self = this;
        let objState = Object.assign({}, this.state);
        ['top', 'bottom', 'left', 'right', 'front', 'back']
        .forEach((classPos)=>{
            console.log(self.arraySquares[classPos][0].obj);
            console.log(self.arraySquares[classPos][1].obj);
            console.log(self.arraySquares[classPos][2].obj);
            // self.rotateSqure(objState, classPos, 0, 'Y', 90);
            // self.rotateSqure(objState, classPos, 1, 'Y', 90);
            // self.rotateSqure(objState, classPos, 2, 'Y', 90);
        });
        self.setState(objState);
    }
    rotateSqure(objState, classPos, index, direction, deltaDeg){
        let arrayTransform = objState[classPos][index].transform.match(/[a-zA-Z0-9]+\([^\)]+\)/g);
        if(true || classPos=='front' && index==0){
            arrayTransform.forEach((element, index)=>{
                if(/^rotateY/.test(element)){
                    console.log(index, element);
                    let deg = parseFloat((element.match(/[\d]+deg/)[0]).match(/[\d]+/)) + deltaDeg;
                    arrayTransform[index] = 'rotateY(' + deg + 'deg)';
                }
            });
        }
        objState[classPos][index].transform = arrayTransform.join(' ');
    }
    onRotateLayer(){

    }
}

export default MagicCube;