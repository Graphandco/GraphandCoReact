import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Page from './Page';
import CreateTip from './CreateTip';
import Axios from 'axios';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

import DeleteIcon from '@material-ui/icons/Delete';

const Tips = () => {
    const [tips, setTips] = useState([]);

    useEffect(() => {
        async function recupereTips() {
            try {
                const response = await Axios.get(
                    'http://localhost:8080/coding-tips'
                );
                console.log(response.data);
                response.data.reverse();
                setTips(response.data);
            } catch (e) {
                console.log('Une erreur est survenue');
            }
        }
        recupereTips();
    }, []);

    return (
        <Page title='Coding Tips'>
            <h1>Tips</h1>
            <CreateTip />
            <div className='tips-list'>
                {tips.map((tip) => (
                    <div key={tip._id} className='tip-single'>
                        <Link to={`/tips/${tip._id}`}>
                            <h3 className='title'>{tip.name}</h3>
                        </Link>

                        <span>{tip.desc}</span>
                        <SyntaxHighlighter
                            style={atomDark}
                            language={tip.language}
                        >
                            {tip.content}
                        </SyntaxHighlighter>
                        <DeleteIcon />
                    </div>
                ))}
            </div>
        </Page>
    );
};

export default Tips;
