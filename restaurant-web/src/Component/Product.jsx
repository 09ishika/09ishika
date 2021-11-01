import React from 'react';
import Productbox from './Productbox';
import pimage1 from '../images/s1.png';
import pimage2 from '../images/s2.png';
function Product() {
    return (
        <>
        <div id='product'>
            <h1>CHOOSE & ENJOY</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ma
                iores totam odio architecto magni! Eos maiores aperiam quis, fuga delectus aspernatur est voluptas ratione aut accusamus minus dignissimos quaerat ducimus rem.</p>
            <div className='a-container'>
                <Productbox image={pimage1} tittle="luger burger"/>
                <productbox image={pimage2} tittle="luger burger"/>
               
            </div>
        </div>
        </>
    )
}

export default Product;
