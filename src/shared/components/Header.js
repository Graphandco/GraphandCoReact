import React from 'react';
import { Link } from 'react-router-dom';

import './Header.scss';

const Header = () => {
    return (
        <>
            <header>
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
            </header>
        </>
    );
};

export default Header;
