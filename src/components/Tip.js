import React from 'react';

const Tip = (props) => {
    return (
        <div className='tip-single'>
            <h3 className='title'>{props.name}</h3>
            <span>{props.desc}</span>
        </div>
    );
};

export default Tip;
