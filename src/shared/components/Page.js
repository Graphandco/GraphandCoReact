import React, { useEffect } from 'react';

const Page = (props) => {
    useEffect(() => {
        document.title = `${props.title} | Graph and Co`;
    });
    return <main>{props.children}</main>;
};

export default Page;
