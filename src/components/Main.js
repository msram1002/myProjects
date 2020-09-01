import React from 'react';

export default function Main({ children, 
    main }) {
    return <header className={main}>{children}
        </header>;
}  

// Attaching default prop to show the image
// In case of error page
Main.defaultProps = {
    main: 'defaultMain'
};