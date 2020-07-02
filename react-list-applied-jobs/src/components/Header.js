import React from 'react';
import './header.css';

function Header({header_text}){
    return(
        <div className="page-header">
            <h2 className="header-text">{header_text}</h2>
        </div>
    );
}

export default Header