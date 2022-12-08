import React from 'react';

const MenuLink = ({ href='#', children }) => (
    <a href={href} className="menu-link">
        <div className="shape-wrapper">
            <div className="shape red-fill">
                <svg x="0px" y="0px" viewBox="0 0 108.1 47">
                    <polygon fill="#FF0000" points="0,7.1 127.3,0 32.3,64 4.8,58.2" />
                </svg>
            </div>
            <div className="shape cyan-fill">
                <svg x="0px" y="0px" viewBox="0 0 108.1 47">
                    <polygon fill="#00FFFF" points="14,0.5 127.4,0 77.4,164 2.3,61.1 " />
                </svg>
            </div>
        </div>
        {children}
    </a>
);

export default MenuLink;