import React, { Component } from 'react';
import './assets/css/styles.scss';
import Link from 'next/link'

class Header extends Component {

    render() {

        return (
            <div className="header">
                <Link href={{ pathname: '/' }} >
                    <a className="item">Home</a>
                </Link>
                <Link href={{ pathname: '/'}} >
                    <a className="item">About</a>
                </Link>
            </div>
        );
    }
}


export default Header;
