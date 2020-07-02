import React from 'react';
import './footer.css';

function Footer({footer_text}){
    return(
        <div className="page-footer">
            <div className= "footer-text">{footer_text}</div>
        </div>
    );
}

export default Footer
