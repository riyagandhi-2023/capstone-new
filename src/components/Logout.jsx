/* eslint-disable no-unused-vars */
import React from 'react'


function  Logout() {
    const handleClick = () => {
        localStorage.clear();
        window.location.relaod();
    }
    return (
        <>
         <h1>Logout Page</h1>
         <button onClick={handleClick}>Logout</button>
        </>
    )
}

export default Logout;