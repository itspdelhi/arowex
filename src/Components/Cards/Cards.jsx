import React, { Component } from 'react';

class Cards extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        const { array_data } = this.props
        return (
            <p>{array_data}</p>
        );
    }
}

export default Cards;

