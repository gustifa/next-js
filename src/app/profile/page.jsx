import React from 'react';

import Image from 'next/image';
import pic from '../../../public/images/demo.png'

const page = () => {
    return (
        <div>
            <h1 className='global-text'>This Is Profile Page</h1>
            {/* <img src="images/demo.png" alt="" /> */}

        <Image 
        src={pic}
        alt='Description for this image'
        width={500}
        height={300}
        
        />

            
        </div>
    );
};

export default page;