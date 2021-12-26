import React from "react";
import './nav.scss';
import {
    Link, NavLink
} from "react-router-dom";
class Nav extends React.Component {
    render() {
        return (
            <div className="topnav">
                <NavLink to="/" activeClassName="active" exact={true}>
                    HOME
                </NavLink>
                <NavLink to="/todo" activeClassName="active">
                    TODO
                </NavLink>
                <NavLink to="/about" activeClassName="active">
                    ABOUT
                </NavLink>
                <NavLink to="/user" activeClassName="active">
                    USER
                </NavLink>
                {/* <Link to="/">Home</Link>
                <Link to="/todo">Todo</Link>
                <Link to="/about">About</Link> */}
            </div>
        );
    }
}

export default Nav;