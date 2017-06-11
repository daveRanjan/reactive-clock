import {push as Menu} from 'react-burger-menu';
import React from "react";
import '../style/SideMenu.css';

class SideMenu extends React.Component {
    render() {
        return (
            <Menu right={false}>
                <a id="home" className="menu-item" href="/">Home</a>
                <a id="about" className="menu-item" href="/about">About</a>
                <a id="contact" className="menu-item" href="/contact">Contact</a>
                <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
            </Menu>
        );
    }
}

export default SideMenu;