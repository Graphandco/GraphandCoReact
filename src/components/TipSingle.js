import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import Page from './Page';
import Axios from 'axios';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const TipSingle = () => {
    const [tip, setTip] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        console.log(id);
        async function recupereTip() {
            try {
                const response = await Axios.get(
                    `http://localhost:8080/coding-tips/${id}`
                );
                setTip(response.data);
                //console.log(response.data);
            } catch (e) {
                console.log('Une erreur est survenue');
            }
        }
        recupereTip();
    }, []);

    return (
        <Page title='Coding Tips'>
            <h1>{tip.name}</h1>
            <span>{tip.desc}</span>
            <SyntaxHighlighter style={atomDark} language={tip.language}>
                {tip.content}
            </SyntaxHighlighter>
        </Page>
    );
};

export default TipSingle;
