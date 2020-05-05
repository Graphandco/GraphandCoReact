import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Page from './Page';
import CreateTip from './CreateTip';
import Axios from 'axios';

import IconButton from '@material-ui/core/IconButton';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

//Add picsum BG to cards
// let random = Math.floor(Math.random() * Math.floor(999999));
// let randomPicsum =
//     `url(https://picsum.photos/900/200/?${random}&rnd` + random + ')';
// let PicsumStyle = {
//     backgroundImage: randomPicsum,
// };

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

            <div className='tips-list'>
                {tips.map((tip) => (
                    <div
                        key={tip._id}
                        className='tip-single'
                        id={tip._id}
                        //style={PicsumStyle}
                    >
                        <Link to={`/tips/${tip._id}`}>
                            <span className='tip-title'>{tip.name}</span>
                        </Link>

                        <span className='tip-desc'>{tip.desc}</span>

                        <Link to={`/tips/${tip._id}`}>
                            <IconButton aria-label='read-more'>
                                <ArrowForwardIosIcon />
                            </IconButton>
                        </Link>
                    </div>
                ))}
            </div>
            <CreateTip />
        </Page>
    );
};

export default Tips;
