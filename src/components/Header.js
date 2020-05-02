import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <header>
                <p>
                    <Link to='/'>Home</Link> |<Link to='/about'>A propos</Link>|
                </p>
            </header>
        </>
    );
};

export default Header;
