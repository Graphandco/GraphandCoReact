import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { useParams } from 'react-router';
import Page from '../../shared/components/Page';
import DeleteTip from '../components/DeleteTip';

import Axios from 'axios';

import './TipSingle.scss';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

import DeleteIcon from '@material-ui/icons/Delete';

const TipSingle = () => {
    const [tip, setTip] = useState([]);
    // const [deleteWasSuccessful, setDeleteWasSuccessful] = useState(false);
    // const [deleteTipAttemptCount, setDeleteAttemptCount] = useState(0);
    const { id } = useParams();

    useEffect(() => {
        const recupereTip = async () => {
            try {
                const response = await Axios.get(
                    `http://localhost:8080/coding-tips/${id}`
                );
                setTip(response.data);
                //console.log(response.data);
            } catch (e) {
                console.log('Une erreur est survenue');
            }
        };
        recupereTip();
    }, [id]);

    // useEffect(() => {
    //     if (deleteTipAttemptCount > 0) {
    //         const deleteTip = async () => {
    //             try {
    //                 const response = await Axios.delete(
    //                     `http://localhost:8080/coding-tips/${id}`
    //                 );
    //                 if (response.data.message === 'Tip removed') {
    //                     setDeleteWasSuccessful(true);
    //                     console.log(response);
    //                 }
    //             } catch (e) {
    //                 console.log('Une erreur est survenue');
    //             }
    //         };
    //         //deleteTip();
    //     }
    // }, [deleteTipAttemptCount, id]);

    // if (deleteWasSuccessful) {
    //     return <Redirect to={`/coding-tips`} />;
    // }

    // const deleteTip = async () => {
    //     const areYouSure = window.confirm(
    //         'Souhaitez-vous vraiment effacer ce Tip ?'
    //     );
    //     if (areYouSure) {
    //         setDeleteAttemptCount((prev) => prev + 1);
    //     }
    // };

    return (
        <Page title='Coding Tips'>
            <h1>{tip.name}</h1>
            {/* <DeleteIcon id={tip._id} onClick={deleteTip} /> */}
            <DeleteTip id={tip._id} />

            <span>{tip.desc}</span>
            <SyntaxHighlighter style={atomDark} language={tip.language}>
                {tip.content}
            </SyntaxHighlighter>
        </Page>
    );
};

export default TipSingle;
