import React, { useEffect } from 'react';

const Page = (props) => {
    useEffect(() => {
        document.title = `${props.title} | Graph and Co`;
        window.scrollTo(0, 0);
    });
    return <>{props.children}</>;
};

export default Page;
