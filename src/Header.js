import React from "react";
import "./Header.css";
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import ForumIcon from '@material-ui/icons/Forum';
import IconButton from '@material-ui/core/IconButton';

function Header() {
    return (
        <div className="header">
            <IconButton>
                <AccountBoxIcon fontSize="large" className="header_icon" />
            </IconButton>

            <img className="header_logo"
                src="https://1000Logos.net/wp-content/uploads/2018/07/tinder-logo.png"
                alt=""
            />
            <IconButton>
                <ForumIcon fontSize="large" className="header_icon" />
            </IconButton>
        </div>
    );
}

export default Header;