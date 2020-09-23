import React, { Component } from 'react';
import "../../assets/voting.css"

class Voting extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    card_function = () => {
        return (
            <div className="center_div2">

                <div className="row" style={{ padding: '1rem' }}>
                    <div className="col-6">
                        <div className="header-circle1">
                            <div className="header-circle2">
                                <div className="header-circle3">
                                    <p className="para-class" style={{ color: 'white', margin: '1rem' }}>Vote</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <h3 style={{ color: 'white', color: 'cyan', fontSize: 'large', marginTop: '2rem' }}>VEVO (Vevo)</h3>
                    </div>
                </div>

                <div className="inside-center-div2">

                    <hr style={{ background: 'cyan', marginBottom: '0px', marginTop: '0px', height: '2px' }} />
                    <div className="row top_div2">
                        <div className="col-6 div-section">
                            <div className="bottom_div2">
                                <h2>Current Round</h2>
                                <h2>Total</h2>
                                <h2>Air Drop</h2>
                            </div>
                        </div>
                        <div className="col-6" style={{ margin: '0 auto' }}>
                            <div className="circle">
                            </div>
                        </div>
                    </div>
                </div>

                <div className="clip-path-design">
                    <div className="footer_div2">
                        <div className="row star-row">
                            <div className="span-data">
                                <span>☆</span>
                            </div>
                            <div className="span-data">
                                <span>☆</span>
                            </div>
                            <div className="span-data">
                                <span>☆</span>
                            </div>
                            <div className="span-data">
                                <span>☆</span>
                            </div>
                            <div className="span-data">
                                <span>☆</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    render() {
        return (
            <div className="voting-game">
                <div className={window.innerWidth > 772 ? 'sidebar' : 'sidebar-responsive'}>
                    <div className="clip-path1">
                        <a className="active" href="#home">Trending</a>
                    </div>
                    <div className="clip-path1">
                        <a className="active" href="#home">Top List</a>
                    </div>
                    <div className="clip-path1">
                        <a className="active" href="#home">Newly </a>
                    </div>
                    <div className="clip-path1">
                        <a className="active" href="#home">Listed</a>
                    </div>

                </div>

                <div className="content">
                    <div className="row cards-row">
                        <div className="col-lg-6">
                            {this.card_function()}
                        </div>
                        <div className="col-lg-6">
                            {this.card_function()}
                        </div>
                    </div>

                    <div className="row cards-row">
                        <div className="col-lg-6">
                            {this.card_function()}
                        </div>
                        <div className="col-lg-6">
                            {this.card_function()}
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Voting;