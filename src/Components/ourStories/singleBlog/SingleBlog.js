import React from 'react';
import { Link } from 'react-router-dom'
import { AiOutlineClockCircle } from 'react-icons/ai'



const SingleBlog = ({ blog }) => {
    const { img, author, title, content, _id } = blog;

    

    return (
        <div>
            <div className="img">
                <img src={img} alt="" style={{ height: '250px', width: '100%' }} />
            </div>
            <div className="p-2">
                <h2 className='text-lg font-bold text-gray-500'>{title}</h2>
                <div className="flex justify-between text-sm font-bold text-gray-500 uppercase py-2">
                    <p>BY: {author}</p>
                    <p><AiOutlineClockCircle className='inline'/> {new Date().toDateString('dd/mm/yy')}</p>
                    
                </div>
                <p className='text-sm text-justify'>{content} ...</p>
                <button className='px-3 rounded py-2 bg-gray-200 mt-3 hover:text-red-500 transition duration-500'>
                    <Link to={`/blogDetails/${_id}`}>Read More...</Link>
                </button>
            </div>
        </div>
    );
};

export default SingleBlog;