import React, { useState, useEffect } from 'react';

import Page from '../../shared/components/Page';
import TipCard from '../components/TipCard';
//import CreateTip from '../components/CreateTip';
import Axios from 'axios';

import './TipsList.scss';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

//Add picsum BG to cards
// let random = Math.floor(Math.random() * Math.floor(999999));
// let randomPicsum =
//     `url(https://picsum.photos/900/200/?${random}&rnd` + random + ')';
// let PicsumStyle = {
//     backgroundImage: randomPicsum,
// };

const Tips = () => {
    const [tips, setTips] = useState([]);

    const [name, setName] = useState();
    const [desc, setDesc] = useState();
    const [language, setLanguage] = useState();
    const [content, setContent] = useState();

    //GETTING ALL TIPS
    useEffect(() => {
        const handleTipListing = async () => {
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
        };
        handleTipListing();
    }, []);

    //ADDING A TIP
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
            //setWasSuccessful(response.data);
            console.log(response);

            setTips((previous) =>
                previous
                    .concat({
                        name,
                        language,
                        desc,
                        content,
                    })
                    .reverse()
            );
            window.scrollTo(0, 0);
        } catch (e) {
            console.log('Il y a eu un problème');
        }
    };

    // so you have like postList render { postArray.mapx=>(<PostComponent>)}
    // so in your list you have handlerDeletePost and you pass it as prop
    // <PostComponent onDelete={handlerDeletePost}/>
    // and inside PostComponent when you click delete you call  onDelete
    // this is how callbacks work

    return (
        <Page title='Coding Tips'>
            <h1>Tips</h1>

            <div className='tips-list'>
                {tips.map((tip) => (
                    <TipCard
                        key={tip._id}
                        className='tip-single'
                        id={tip._id}
                        name={tip.name}
                        desc={tip.desc}
                    />

                    //style={PicsumStyle}
                ))}
            </div>

            <form className='tips-form' onSubmit={handleTipSubmit}>
                <div className='tips-form__item name'>
                    <TextField
                        onChange={(e) => setName(e.target.value)}
                        label='Nom'
                        autoFocus
                        type='text'
                        fullWidth={true}
                    />
                </div>

                <div className='tips-form__item desc'>
                    <TextField
                        onChange={(e) => setDesc(e.target.value)}
                        label='Description'
                        type='text'
                        autoComplete='off'
                        fullWidth={true}
                    />
                </div>

                <div className='tips-form__item language'>
                    <TextField
                        onChange={(e) => setLanguage(e.target.value)}
                        label='Langage'
                        type='text'
                        autoComplete='off'
                        fullWidth={true}
                    />
                </div>

                <div className='tips-form__item content'>
                    <TextField
                        onChange={(e) => setContent(e.target.value)}
                        label='Code du Tip'
                        multiline
                        variant='outlined'
                        fullWidth={true}
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
        </Page>
    );
};

export default Tips;
