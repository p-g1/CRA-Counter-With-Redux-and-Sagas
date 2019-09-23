import React, { Component } from 'react';
import { connect } from 'react-redux';
import { MINUS_ONE, ADD_ONE, INCREMENT_ASYNC } from "./actions";

const mapStateToProps = state => {
    return {
        count: state.count
    }
}
class Counter extends Component {

    incrementCount() {
        this.props.dispatch({type: ADD_ONE});
    }

    incrementCountAsync() {
        this.props.dispatch({type: INCREMENT_ASYNC});
    }

    decrementCount() {
        this.props.dispatch({type: MINUS_ONE});
    }

    render(){
        return (
            <>
                <h1>Counter</h1>
                <h1>{this.props.count}</h1>
                <button onClick={()=> this.incrementCount()}>+</button>
                <button onClick={()=> this.decrementCount()}>-</button>
                <button onClick={()=> this.incrementCountAsync()}>async+</button>
            </>
        )
    }
}

export default connect(mapStateToProps)(Counter);
