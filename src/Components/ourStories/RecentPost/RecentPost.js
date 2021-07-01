import React from 'react';
import { AiOutlineClockCircle } from 'react-icons/ai';


const RecentPost = () => {
    const [blogs, setBlogs] = React.useState([]);
    const [spinner, setSpinner] = React.useState(true);

    React.useEffect(() => {
        fetch(`http://localhost:5000/getBlogs`)
            .then(res => res.json())
            .then(blogs => {
                setBlogs(blogs)
                setSpinner(false)
            });

    }, []);


    return (
        <>
            <h1 className='font-bold pt-3 text-gray-600'>RECENT POST</h1>
            {
                spinner && <div className="lds-ring absolute inset-2/4"><div></div><div></div><div></div><div></div></div>
            }
            {
                blogs.map(blog => <section key={Math.random()} className='grid grid-cols-3 gap-3 group hover:bg-gray-100 py-2 cursor-pointer'>
                    <div className="">
                        <img src={blog.img} alt="" className='h-20 w-full' />
                    </div>
                    <div className="py-2 col-span-2">
                        <h1 className='text-sm text-gray-500 group-hover:text-red-600'>{blog.title}</h1>
                        <p className='text-sm text-gray-500 font-bold'><AiOutlineClockCircle className='inline'/> {blog.date}</p>
                    </div>
                </section>
                )
            }
        </>
    );
};

export default RecentPost;