import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { useParams } from 'react-router';

import DeleteIcon from '@material-ui/icons/Delete';

import Axios from 'axios';

const DeleteTip = (tip) => {
    const [deleteWasSuccessful, setDeleteWasSuccessful] = useState(false);
    const [deleteTipAttemptCount, setDeleteAttemptCount] = useState(0);
    const { id } = useParams();

    const idToRemove = `${tip.id}`;

    useEffect(() => {
        if (deleteTipAttemptCount > 0) {
            const deleteTip = async () => {
                try {
                    const response = await Axios.delete(
                        `http://localhost:8080/coding-tips/${idToRemove}`
                    );
                    if (response.data.message === 'Tip removed') {
                        setDeleteWasSuccessful(true);
                        console.log(response);
                    }
                } catch (e) {
                    console.log('Une erreur est survenue');
                }
            };
            deleteTip();
        }
    }, [deleteTipAttemptCount, id]);

    if (deleteWasSuccessful) {
        return <Redirect to={`/coding-tips`} />;
    }

    const deleteTip = async () => {
        const areYouSure = window.confirm(
            'Souhaitez-vous vraiment effacer ce Tip ?'
        );
        if (areYouSure) {
            setDeleteAttemptCount((prev) => prev + 1);
        }
    };

    return <DeleteIcon id={idToRemove} onClick={deleteTip} />;
};

export default DeleteTip;
