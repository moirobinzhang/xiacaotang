import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

const CanonicalLink: React.FC = () => {
    const location = useLocation();
    // Ensure no trailing slash unless it's root, but typically canonicals prefer consistency. 
    // We will append the pathname to the domain.
    const canonicalUrl = `https://www.xiacaotang.com${location.pathname === '/' ? '' : location.pathname}`;

    return (
        <Helmet>
            <link rel="canonical" href={canonicalUrl} />
        </Helmet>
    );
};

export default CanonicalLink;
