import React from 'react';

const Footer = () => {
    return (
        <div>
            <p className="text-center text-sm text-muted-foreground">
                &copy; {new Date().getFullYear()} User Info. All rights reserved.
            </p>
        </div>
    );
};

export default Footer;