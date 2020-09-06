import React, { Component } from 'react'

export default class NavItem extends Component {
    render() {
        return (
            <li className="nav-item">
                <a href="#" className="icon-button">
                    {this.props.icon}
                </a>
            </li>
        )
    }
}
