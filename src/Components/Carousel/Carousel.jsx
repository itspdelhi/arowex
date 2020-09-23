import React, { Component } from 'react';

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <>

        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="corosal-div" style={{width:'100rem'}}>
                
                <img  className="d-block w-100" src="/images/image3.jpg"/>
                
              </div>
            </div>
            <div className="carousel-item">
              <div className="corosal-div">
              <img  className="d-block w-100" src="/images/image4.jpg"/>
              </div>
            </div>
            <div className="carousel-item">
              <div className="corosal-div">
                <h1>CRYPTOCURRENCY BIGGEST PLATFORM</h1>
              </div>
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            
            <span className="sr-only">Next</span>
          </a>
        </div>
      </>
    );
  }
}

export default Carousel;