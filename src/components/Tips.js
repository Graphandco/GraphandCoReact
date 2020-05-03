import React, { useState, useEffect } from 'react';
import Page from './Page';
import Tip from './Tip';
import Axios from 'axios';

const Tips = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        async function recuperePosts() {
            try {
                const response = await Axios.get(
                    'http://localhost:8080/subscribers'
                );
                console.log(response.data);
                setPosts(response.data);
            } catch (e) {
                console.log('Une erreur est survenue');
            }
        }
        recuperePosts();
    }, []);

    return (
        <Page title='Accueil'>
            <h1>Tips</h1>
            <div className='tips-list'>
                {posts.map((post) => {
                    return (
                        <Tip
                            key={post._id}
                            name={post.name}
                            desc={post.subscribedToChannel}
                        ></Tip>
                    );
                })}
            </div>
        </Page>
    );
};

export default Tips;
