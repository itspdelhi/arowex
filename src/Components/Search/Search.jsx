import React, { Component } from 'react';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <>

                <div class="row row-search">
                    <p className="row-search-text">Get started with your crypto journey</p>
                    <div class="input-group">
                        <input
                            type="text"
                            class="form-control"
                            placeholder="Search here"
                        />
                        <div class="input-group-append">
                            <span class="btn btn-primary " id="basic-addon2" style={{margin:'auto',width:'auto'}}>SIGNUP</span>
                        </div>
                    </div>
                </div>

            </>
        );
    }
}

export default Search;