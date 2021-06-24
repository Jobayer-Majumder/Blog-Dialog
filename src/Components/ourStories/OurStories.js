import React from 'react';
import { FaRegHeart } from 'react-icons/fa';
import Blogs from './blogs/Blogs'
import Sidebar from './Sidebar/Sidebar';

const OurStories = () => {
    return (
        <>
            <section>
                <div className="container mx-auto px-4 lg:px-0 pt-16">
                    <div className='py-12'>
                        <h2 className='p-4 bg-gray-200 rounded inline'>
                            <FaRegHeart className='inline text-3xl text-red-400' />
                        </h2>
                        <h1 className='inline text-xl md:text-3xl font-bold ml-2'>
                            Our Stories
                        </h1>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <div className="sm:col-span-2 md:col-span-2">
                            <Blogs />
                        </div>
                        <div className="px-3 border">
                            <Sidebar />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default OurStories;