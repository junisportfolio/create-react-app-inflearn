import React, {Component, PropTypes} from 'react';

const propTypes = {
    valueNumber: PropTypes.number
};

const defaultProps = {
    valueNumber: -1
};

class Value extends Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                <h1>{this.props.valueNumber}</h1>
            </div>
        );
    }

}

Value.propTypes = propTypes;
Value.defaultprops = defaultProps;

export default Value;