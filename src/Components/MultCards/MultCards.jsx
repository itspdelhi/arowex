import React, { Component } from 'react';

class MultCards extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        const { content_data, tag_class } = this.props
        return (
            <div className={tag_class.card_group}>
                <div className={tag_class.card} style={{height:'13rem'}}>
                    <div className={tag_class.card_body} style={{marginTop:'2rem'}}>
                        <i className={content_data.icon} aria-hidden="true"></i>
                        <h5 className={tag_class.card_title}>{content_data.h5}</h5>
                        <p className={tag_class.card_text}>
                            <small className={tag_class.text_muted}>{content_data.small_tag}</small>
                        </p>
                    </div>
                </div>
            </div>

        );
    }
}

export default MultCards;