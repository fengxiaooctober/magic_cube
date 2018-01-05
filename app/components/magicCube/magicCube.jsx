import React, {Component} from 'react';
import { Provider } from 'react-redux';
import Square from '../square/square.jsx'
import './magicCube.scss';

class MagicCube extends Component{
    constructor(props) {
        super(props);
        this.state = {
            arraySquares: {}
        }
        this.renderFace = this.renderFace.bind(this);
    }
    renderFace(obj){
        let res = [];
        let {classPos, classBgColor} = obj;
        if(!Array.isArray(this.state.arraySquares[classBgColor])){
            this.state.arraySquares[classBgColor] = [];
        }
        for(let index=0;index<9;index++){
            this.state.arraySquares[classBgColor][index] = {classPos: classPos};
            let squre = (
                <Provider store={obj} key={index}>
                    <Squre/>
                </Provider>
            );//'pos_${index}'.replace('${index}',index)
            res.push(squre);
        }
        return res;
    }
    render(){
        return(
        <div className="magic-cube" style={{transform: 'rotateX(' + this.props.transform.rotateX + 'deg) rotateY(' + this.props.transform.rotateY + 'deg) rotateZ(' + this.props.transform.rotateZ + 'deg)'}}>
            {this.renderFace({ classPos: 'top', classBgColor: 'red' })}
            {this.renderFace({ classPos: 'bottom', classBgColor: 'orange' })}
            {this.renderFace({ classPos: 'left', classBgColor: 'blue' })}
            {this.renderFace({ classPos: 'right', classBgColor: 'green' })}
            {this.renderFace({ classPos: 'front', classBgColor: 'yellow' })}
            {this.renderFace({ classPos: 'back', classBgColor: 'white' })}
        </div>
        )
    }
    onClickSqure(arrayClassName){
        let [classIndex, classPos] = arrayClassName, index = classIndex.match(/(\d)+/)[0];
        let mxSquaresNew = {};
        console.log('index', index);
        console.log('classPos', classPos);
        const refRotate = {
            left: 'front',
            front: 'right',
            right: 'back',
            back: 'left'
        };
        for(let classBgColor in this.state.arraySquares){
            mxSquaresNew[classBgColor] = [];
            this.state.arraySquares[classBgColor].forEach((arraySquareFace,i)=>{
                if(Object.keys(refRotate).indexOf(arraySquareFace.classPos)>=0
                    && Math.floor(index/3)==Math.floor(i/3)){
                    mxSquaresNew[classBgColor][i] = {classPos: refRotate[arraySquareFace.classPos]};
                }else{
                    mxSquaresNew[classBgColor][i] = arraySquareFace
                }
            });
        }
        this.setState({arraySquares: mxSquaresNew});
        return;
    }
    onClickSqure2(index, classPos, event){
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