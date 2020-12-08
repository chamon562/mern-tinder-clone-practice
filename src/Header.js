import React from "react";
import "./Header.css";
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import IconButton from '@material-ui/core/IconButton';

function Header() {
    return (
        <div className="header">
            <h2>I am Header</h2>
            <IconButton>
                <AccountBoxIcon fontSize="large" className="header_icon" />
            </IconButton>
        </div>
    );
}

export default Header;