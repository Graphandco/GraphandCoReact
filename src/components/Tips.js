import React, { useState, useEffect } from 'react';
import Page from './Page';
import Tip from './Tip';
import Axios from 'axios';

const Tips = () => {
    const [tips, setTips] = useState([]);

    useEffect(() => {
        async function recupereTips() {
            try {
                const response = await Axios.get(
                    'http://localhost:8080/coding-tips'
                );
                console.log(response.data);
                setTips(response.data);
            } catch (e) {
                console.log('Une erreur est survenue');
            }
        }
        recupereTips();
    }, []);

    return (
        <Page title='Accueil'>
            <h1>Tips</h1>
            <div className='tips-list'>
                {tips.map((tip) => {
                    return (
                        <Tip
                            key={tip._id}
                            name={tip.name}
                            language={tip.language}
                            content={tip.tipContent}
                        ></Tip>
                    );
                })}
            </div>
        </Page>
    );
};

export default Tips;
