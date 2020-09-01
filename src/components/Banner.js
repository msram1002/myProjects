import React from 'react';

// Banner would vary as per the children
export default function Banner({children, title, subtitle}) {
    return (
        <div className="banner">
            <h2>{title}</h2>
            <div></div>
            <p>{subtitle}</p>
            {children}
        </div>
    )
}
