import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar/Navbar';
import Carousel from './Components/Carousel/Carousel';
import Cards from './Components/Cards/Cards';
import Search from './Components/Search/Search';
import { Header, Footer } from './Components/Footer/Footer';
import MultCards from './Components/MultCards/MultCards';
import Tables from './Components/Tables/Tables';

import CardsDesign from './Components/CardsDesign/CardsDesign';
import BarCode from './Components/BarCode/BarCode';
import { Card_array } from "./Components/Content_Data/Cards/cards";
import Logo from "./Components/Logo/logo";



import {
    icon,
    tags_object
} from "./Components/Content_Data/MultCards/multcards";

import {
    class_name,
    first_footer_data,
    footer_icon
} from "./Components/Content_Data/Footer/footer";


import {
    card_class,
    card_data_small
} from './Components/Content_Data/Cardblue/cardnlue';

import {
    class_name_barcode,
    class_h

} from './Components/Content_Data/codeBar/codebar';

class Merged extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log();

        return (
            <>
                <div className="bgimg">
                    <div className="bgimg">
                        {
                            window.location.href.includes("m2") ? (<Logo />) : (<Navbar />)
                        }

                        <div className="">
                            <Carousel />
                        </div>

                        <div className="container">
                            <div className="row card-design">

                                {
                                    card_data_small.map(data => {
                                        return (
                                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12" style={{marginBottom:'2rem',marginTop:'5rem'}}>
                                                <CardsDesign tag_data_small={data} class_tag_card={card_class} />
                                            </div>
                                        )
                                    })
                                }

                            </div>
                        </div>
                    </div>
                    {/* ------------------------------------------------------------------------------------------ */}
                    <div className="container-fluid">
                        <div className="row row1" style={{marginBottom:'5rem'}}>
                            {
                                Card_array.map((data, index) => {
                                    return (
                                        <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12 col-12">
                                            <Cards array_data={data} />
                                        </div>
                                    )
                                })
                            }
                        </div>
                        {/*--------------------------------------------------------------------------------------------  */}
                    </div>
                    <div className="container-fluid">
                        <Tables />
                    </div>

                    <div className="container-fluid" style={{backgroundColor:'001D57'}}>
                        <div className="row">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <h2 className="row-text" style={{marginTop:'7rem',fontSize:'1.8rem'}}>One Stop Asset Management & Trading Platform</h2>
                                    <hr className="hr-line" style={{color:'white'}}/>
                            </div>
                            {
                                icon.map(data => {
                                    return (
                                        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-xs-12 cards--part1 waypoint" style={{height:'15rem',marginBottom:'4rem',marginTop:'0rem'}}>
                                            <MultCards content_data={data} tag_class={tags_object}  />
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    {/* ----------------------------------------------------------------------------------------------------- */}
                    <div className="container-fluid" style={{backgroundColor:'rgb(24,20,75)'}} >
                        <BarCode class_tag_code={class_name_barcode} class_h_code={class_h} />
                        
                        

                        
                    </div>
                    {/* ------------------------------------------------------------------------------------------------------ */}
                    <div className="container-fluid">
                        <Search />
                    </div>


                    <div className="container-fluid footer"  style={{backgroundColor:'rgb(24,20,75)'}}>
                        <div className="row footer-row">
                            <div className="col-xl-6 col-lg-3 col-md-9 col-sm-12 col-xs-12">
                                <Header class_tag={class_name} footer_icons={footer_icon} />
                            </div>
                            {
                                first_footer_data.map(data => {
                                    return (
                                        <div className="col-xl-2 col-lg-3 col-md-3 col-sm-12 col-xs-12" >
                                            <Footer class_tag={class_name} data_content={data} />
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>


                
            </>
        );
    }
}



export default Merged;