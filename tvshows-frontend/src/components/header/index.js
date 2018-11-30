import React, { Component } from 'react';
import './assets/css/styles.scss';

class Header extends Component {

    render() {

        return (
            <div className="header">
                <a className="item" href="/home">Home</a>
                <a className="item" href="/about">About</a>
            </div>
        );
    }
}


export default Header;
