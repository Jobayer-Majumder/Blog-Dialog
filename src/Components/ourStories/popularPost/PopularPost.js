import React from 'react';



const PopularPost = () => {
    const [ blog, setBlog ] = React.useState();

    React.useEffect(() => {
        fetch(`http://localhost:5000/getBlogs`)
        .then(res => res.json())
        .then(blog => setBlog(blog[4]))
    }, [])


    return (
        <section className='relative py-4 overflow-hidden'>
            <h1 className='font-bold py-3 text-gray-600'>POPULAR POST</h1>
            <img src={blog?.img} alt="" className='transform transition duration-500 hover:scale-110' />
            <div className="absolute text-white bottom-8 left-2">
                <p className='text-sm'>{blog?.date}</p>
                <h1 className='text-sm font-bold'>{blog?.title}</h1>
            </div>
        </section>
    );
};

export default PopularPost;