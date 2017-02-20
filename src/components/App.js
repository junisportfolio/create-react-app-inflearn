import React, {Component, PropTypes} from 'react';

import Counter from './Counter';


const propTypes = {};

const defaultProps = {};

class App extends Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <Counter/>

        );
    }

}

App.propTypes = propTypes;
App.defaultprops = defaultProps;

export default App;