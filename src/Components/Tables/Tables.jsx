import React, { Component } from 'react';

class Tables extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <>
                
                    <div className="row table-data" style={{alignItems:'center'}}>
                        <div className="col-xl-2 col-lg-2 col-md-1 col-sm- col-xs-1 col-2">
                            <p>FAV</p>
                        </div>
                        <div className="col-xl-2 col-lg-2 col-md-1 col-sm- col-xs-1 col-2">
                            <p>USDT</p>
                        </div>
                    
                        <div className="col-xl-2 col-lg-2 col-md-1 col-sm- col-xs-1 col-2">
                            <p>BTC</p>
                        </div>
                        <div className="col-xl-2 col-lg-2 col-md-1 col-sm- col-xs-1 col-2">
                            <p>ETH</p>
                        </div>
                        <div className="col-xl-2 col-lg-2 col-md-1 col-sm- col-xs-1 col-2">
                            <p>JVZ</p>
                        </div>
                        <div className="col-xl-2 col-lg-2 col-md-1 col-sm- col-xs-6 col-12">
                        <input className="form-control mr-sm-2" style={{textAlign:'center'}} type="search" placeholder="Search" aria-label="Search"></input>
                        </div>
                    </div>


                  <div className="table-responsive" style={{backgroundColor:'#003153'}}>
                        <div className="table">

                            
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col"></th>
                                <th scope="col">Market</th>
                                <th scope="col">Price</th>
                                <th scope="col">Change</th>
                                <th scope="col">24H High</th>
                                <th scope="col">24H Low</th>
                                <th scope="col">24H Volume</th>
                                <th scope="col">24H Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">☆</th>
                                <td>BTC/USDT</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <th scope="row">☆</th>
                                <td>LTC/USDT</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <th scope="row">☆</th>
                                <td>ETH/USDT</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <th scope="row">☆</th>
                                <td>ETC/USDT</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <th scope="row">☆</th>
                                <td>EOS/USDT</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <th scope="row">☆</th>
                                <td>BCH/USDT</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <th scope="row">☆</th>
                                <td>BSV/USDT</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                            </tr>
                            
                            
                        </tbody>
                    </table>
                

                        </div>
                  </div>

                
                
                
            </>
        );
    }
}

export default Tables;