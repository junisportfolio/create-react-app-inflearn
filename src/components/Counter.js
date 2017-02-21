import React, {Component, PropTypes} from 'react';

import Value from './Value';
import Control from './Control';
import { connect } from 'react-redux';
// import { connect, bindActionCreators } from 'react-redux';

import * as actions from '../actions';


const propTypes = {};

const defaultProps = {};

class Counter extends Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                <Value number={this.props.number}/>
                <Control/>
            </div>
        );
    }

}

Counter.propTypes = propTypes;
Counter.defaultProps = defaultProps;

const mapStateToProps = (state) => {
    return {
        number: state.counter.number,
        color: state.ui.color
    };
}

const mapDispatchToProps = (dispatch) => {
    /*
    * return bindActionCreators(actions, dispatch);
    * 단점은 이름을 임의로 지정할 수 없고 bindActionCreators 로 사용해야 한다.
    * */
    return {
        handleIncrement: () => { dispatch(actions.increment()) },
        handleDecrement: () => { dispatch(actions.decrement()) },
        handleSetColor: (color) => { dispatch(actions.setColor(color)) }
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(Counter);