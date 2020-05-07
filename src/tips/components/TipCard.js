import React from 'react';
import { Link } from 'react-router-dom';

import './TipCard.scss';

import IconButton from '@material-ui/core/IconButton';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const TipCard = (tip) => {
    return (
        <div key={tip.id} className='tip-card' id={tip.id}>
            <Link to={`/tips/${tip.id}`}>
                <span className='tip-title'>{tip.name}</span>
            </Link>

            <span className='tip-desc'>{tip.desc}</span>

            <Link to={`/tips/${tip.id}`}>
                <IconButton aria-label='read-more'>
                    <ArrowForwardIosIcon />
                </IconButton>
            </Link>
        </div>
    );
};

export default TipCard;
