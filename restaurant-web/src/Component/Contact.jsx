import React from 'react';

function Contact() {
    return (
        <div id='contact'>
            <h1>BOOK YOUR TABLE</h1>
            <form>
                <input type='text' placeholder='Full Name'/>
                <input type='email' placeholder='Enter Email id'/>
                 <input type='Address' placeholder='Enter Your Address'/>
                <textarea placeholder='write here..'></textarea>
                <input type='submit' value='BOOK'/>
            </form>
        </div>
    )
}

export default Contact;
