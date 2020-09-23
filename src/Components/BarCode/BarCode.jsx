import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class BarCode extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        const { class_h_code, class_tag_code } = this.props;
        return (
            <>


                <div className={class_tag_code.row_my_container_fluid}>
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <h1 className={class_tag_code.display_6} style={{ fontSize: '2rem', marginTop: '8rem' }}>{class_h_code.h1}</h1>
                    </div>
                </div>
                <div className={class_tag_code.row_details}>
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <h1 className="" style={{ fontSize: '1.4rem' }}>{class_h_code.h2} </h1>

                    </div>
                    <div className="col-xl-6 col-lg-7 col-md-5 col-sm-4 col-xs-4">


                        <div class="card" style={{ width: '18rem', height: '13rem' }}>

                            <div class="card-body" style={{ marginTop: '3rem' }}>
                                <h5 class="card-title" style={{ color: 'black', textAlign: 'center' }}>Some quick example text to build on the card title and make up the bulk of the card's content.</h5>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-6 col-lg-5 col-md-7 col-sm-8 col-xs-8">
                        <div class="card" style={{ width: '18rem', height: '13rem' }}>

                            <div class="card-body" style={{ marginTop: '3rem' }}>
                                <h5 class="card-title" style={{ color: 'black', textAlign: 'center' }}>Some quick example text to build on the card title and make up the bulk of the card's content.</h5>
                            </div>
                        </div>
                    </div>
                </div>
            
            <div className={class_tag_code.row}>
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 details-col2">
                    <h2>{class_h_code.h4}
                    </h2>
                </div>
            </div>



            </>
        );
    }
}

export default BarCode;