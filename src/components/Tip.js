import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const Tip = (props) => {
    return (
        <div className='tip-single'>
            <h3 className='title'>{props.name}</h3>
            <span>{props.desc}</span>
            <SyntaxHighlighter style={atomDark} language={props.language}>
                {props.content}
            </SyntaxHighlighter>
        </div>
    );
};

export default Tip;
