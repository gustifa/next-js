import React, { useEffect } from 'react';

const page = () => {

    useEffect(()=> {
        (async() => {
            let res = await fetch('')
            let json = await res.json()
        })
    })
    return (
        <div>
            <h1>Call Api</h1>
        </div>
    );
};

export default page;