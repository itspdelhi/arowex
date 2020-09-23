import React, { Component } from 'react';

class Logo extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div style = {{textAlign: 'center', background: 'black'}}>
                <img className="navbar-img" src="/images/25.jpg" />
            </div>
        );
    }
}
 
export default Logo;