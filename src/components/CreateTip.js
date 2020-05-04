import React, { useEffect, useState, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import Axios from 'axios';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

function CreatePost(props) {
    const [wasSuccessful, setWasSuccessful] = useState();
    const [name, setName] = useState();
    const [desc, setDesc] = useState();
    const [language, setLanguage] = useState();
    const [content, setContent] = useState();

    const handleTipSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await Axios.post(
                'http://localhost:8080/coding-tips',
                {
                    name,
                    language,
                    desc,
                    content,
                }
            );
            setWasSuccessful(response.data);
            console.log(response);
        } catch (e) {
            console.log('Il y a eu un problème');
        }
    };

    if (wasSuccessful) {
        //return <Redirect to={`/post/${wasSuccessful}`} />;
        //return <p>Bravo !</p>;
    }

    return (
        <form onSubmit={handleTipSubmit}>
            <TextField
                onChange={(e) => setName(e.target.value)}
                label='Nom'
                autoFocus
                type='text'
            />

            <TextField
                onChange={(e) => setDesc(e.target.value)}
                label='Description'
                type='text'
                autoComplete='off'
            />

            <TextField
                onChange={(e) => setLanguage(e.target.value)}
                label='Langage'
                type='text'
                autoComplete='off'
            />

            <TextField
                onChange={(e) => setContent(e.target.value)}
                label='Code du Tip'
                multiline
                name='body'
                type='text'
            />

            <Button type='submit' variant='contained'>
                Ajouter le Tip
            </Button>
        </form>
    );
}

export default CreatePost;
