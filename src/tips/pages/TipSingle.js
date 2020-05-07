import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import Page from '../../shared/components/Page';
import DeleteTip from '../components/DeleteTip';
//import TipEdit from './TipEdit';

import Axios from 'axios';

import './TipSingle.scss';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const TipSingle = () => {
    const [tip, setTip] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const recupereTip = async () => {
            try {
                const response = await Axios.get(
                    `http://localhost:8080/coding-tips/${id}`
                );
                setTip(response.data);
            } catch (e) {
                console.log('Une erreur est survenue');
            }
        };
        recupereTip();
    }, [id]);

    return (
        <Page title='Coding Tips'>
            <div className='tip-single'>
                <h1>{tip.name}</h1>
                <div className='tip-desc'>
                    <span>{tip.desc}</span>
                </div>
                <div className='tip-content'>
                    <SyntaxHighlighter style={atomDark} language={tip.language}>
                        {tip.content}
                    </SyntaxHighlighter>
                </div>
                <div className='tip-controls'>
                    <DeleteTip id={tip._id} />
                </div>
            </div>
            {/* <TipEdit /> */}
        </Page>
    );
};

export default TipSingle;
