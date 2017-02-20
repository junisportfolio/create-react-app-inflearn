import React, {Component, PropTypes} from 'react';

import Value from './Value';
import Control from './Control';


const propTypes = {};

const defaultProps = {};

class Counter extends Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                <Value number/>
                <Control/>
            </div>
        );
    }

}

Counter.propTypes = propTypes;
Counter.defaultprops = defaultProps;

export default Counter;