import React from 'react';
import { NavLink } from 'react-router-dom';

const Error = () => {
    return (
        <>
            <div className="conatiner error-page">
                <img src="./images/404error.png" alt="error404" />
                <button className='btn'>
                    <NavLink to ="/">Go Back Home</NavLink>
                </button>
            </div>
        </>
    )
}

export default Error
