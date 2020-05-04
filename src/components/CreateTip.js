import React, { useEffect, useState, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import Axios from 'axios';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

function CreateTip(props) {
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
        <form className='tips-form' onSubmit={handleTipSubmit}>
            <div className='tips-form__item name'>
                <TextField
                    onChange={(e) => setName(e.target.value)}
                    label='Nom'
                    autoFocus
                    type='text'
                    fullWidth='true'
                />
            </div>

            <div className='tips-form__item desc'>
                <TextField
                    onChange={(e) => setDesc(e.target.value)}
                    label='Description'
                    type='text'
                    autoComplete='off'
                    fullWidth='true'
                />
            </div>

            <div className='tips-form__item language'>
                <TextField
                    onChange={(e) => setLanguage(e.target.value)}
                    label='Langage'
                    type='text'
                    autoComplete='off'
                    fullWidth='true'
                />
            </div>

            <div className='tips-form__item content'>
                <TextField
                    onChange={(e) => setContent(e.target.value)}
                    label='Code du Tip'
                    multiline
                    variant='outlined'
                    fullWidth='true'
                    rows='5'
                    name='body'
                    type='text'
                />
            </div>

            <div className='tips-form__item button'>
                <Button type='submit' variant='contained'>
                    Ajouter le Tip
                </Button>
            </div>
        </form>
    );
}

export default CreateTip;
