import React, {Component} from 'react';
import { connect } from 'react-redux'
import { createStore } from 'redux'
import './square.scss';

// React component
class Squre extends Component{
    constructor(props) {
        super(props);
    }
    render(){
        const {classBgColor, classPos, onClickSquare} = this.props;
        return (
        <div className={[].concat('squre',classBgColor,classPos).join(' ')} onClick={onClickSquare}></div>
        )
    }
}

// Action
const clickSquareAction = { type: 'clickSquare' };

// Reducer
function reducerSquare(state, action) {
    // Change the object as needed
    const {classPos, classBgColor} = state;
    const refRotate = {
        left: 'front',
        front: 'right',
        right: 'back',
        back: 'left'
    };
    switch (action.type) {
        case 'clickSquare':
            return {
                classPos: refRotate[classPos],
                classBgColor: classBgColor
            }
        default:
            return state
    }
}

// Store
const storeSquare = createStore(reducerSquare)

// Map Redux state to component props
function mapStateToProps(state) {
    const {classPos, classBgColor} = state;
    return { classPos, classBgColor };
}

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
    return {
        onIncreaseClick: () => dispatch(increaseAction),
        onDecreaseClick: () => dispatch(decreaseAction)
    }
}

// Connected Component
const AppSqure = connect(
    mapStateToProps,
    mapDispatchToProps
)(Squre)

export default AppSqure;