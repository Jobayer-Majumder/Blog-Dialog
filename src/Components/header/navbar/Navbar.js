import React from 'react';


// external imports
import { Link } from 'react-router-dom'




const Navbar = () => {
    return (
        <>
            <nav className='border-b border-gray-500'>
                <div className="container mx-auto">
                    <div className="flex justify-around items-end py-7 px-3 lg:px-2">
                        <div>
                            <Link to='/' className='text-2xl text-gray-400 hover:text-gray-200 font-bold'>Blog Dialog</Link>
                        </div>
                        <div className='text-gray-400 text-lg'>
                            <Link to="/" className='mx-5 hover:text-gray-200'>Home</Link>
                            <Link to="/" className='hover:text-gray-200'>Blogs</Link>
                            <Link to="/admin" className='mx-5 hover:text-gray-200'>Admin</Link>
                            <Link to="/" className='hover:text-gray-200'>Contact us</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;