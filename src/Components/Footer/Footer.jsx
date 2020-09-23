import React, { Component } from 'react';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        const { class_tag, footer_icons } = this.props;
        return (
            <>
            <img className={class_tag.footer_img} src="/images/26.png" />
            <p className={class_tag.footer_p}>©2020 ArowEx.com</p>
            <div className={class_tag.footer_icon}>
                {
                    footer_icons.map(data => {
                        return (
                            <i className={data} aria-hidden="true" />
                        )
                    })
                }
            </div>
            </>
        );
    }
}

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const { class_tag, data_content } = this.props
        return (
            <div className={class_tag.first_footer}>
                <h2 className={class_tag.first_footer_h2}>{data_content.h2}</h2>
                <p>{data_content.p1}</p>
                <p>{data_content.p2}</p>
                <p>{data_content.p3}</p>
            </div>
        );
    }
}

export { Header, Footer };