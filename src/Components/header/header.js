import React from 'react';
import Navbar from './navbar/Navbar';
import bg from '../../images/Optimized-joanna-kosinska-7ACuHoezUYk-unsplash.jpg'



const headerStyle = {
    height: '100vh',
    backgroundImage: `linear-gradient(to right, rgba(121, 121, 107, .6), rgba(121, 121, 107, .6)), url(${bg})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'left',
}


const header = () => {
    return (
        <>
            <header style={headerStyle}>
                <Navbar />
            </header>
        </>
    );
};

export default header;