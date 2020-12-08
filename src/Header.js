import React from "react";
import "./Header.css";
import AccountBoxIcon from '@material-ui/icons/AccountBox';

function Header() {
    return (
        <div className="header">
            <h2>I am Header</h2>
            <AccountBoxIcon fontSize="large" className="header_icon"/>
        </div>
    )
}

export default Header;