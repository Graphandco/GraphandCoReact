import React from 'react';
import { Link } from 'react-router-dom';

import './Nav.scss';

const Nav = () => {
    return (
        <nav>
            <ul className='links'>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/tips'>Tips</Link>
                </li>
                <li>
                    <Link to='/about'>A propos</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;
