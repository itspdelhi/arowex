import React, { Component } from 'react';

class CardsDesign extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        const { class_tag_card, tag_data_small } = this.props;
        return (
            <>

                
                        <div class={class_tag_card.main_div}>
                            <div class={class_tag_card.center_div}>
                                <div class={class_tag_card.top_div}>
                                    <h2>{tag_data_small.h2}</h2>
                                    <h1>{tag_data_small.h1}</h1>
                                </div>
                                <div class={class_tag_card.bottom_div}>
                                    <h2>{tag_data_small.h3}</h2>
                                    <p>{tag_data_small.p}</p>
                                </div>
                            </div>
                        </div>
                  

            </>
        );
    }
}

export default CardsDesign;