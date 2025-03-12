'use client'
import React, { useEffect, useState } from 'react';
async function getData(params) {
    let res = await fetch('https://dummyjson.com/products')
    let json = await res.json()
    return json['products']
}
const page = async() => {
let data = await getData();
 

    return (
        <div>
            <h1>Call Api</h1>
            {data.map((item,index) => {
                return <div key={index}>
                    <h4>{item['title']}</h4>
                    <h4>{item['category']}</h4>
                    <p>Rp. {item['price']}</p>
                </div>
            })}
        </div>
    );
};

export default page;