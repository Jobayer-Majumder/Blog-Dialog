import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../header/navbar/Navbar';
import staticImg from '../../images/alexis-brown-omeaHbEFlN4-unsplash.jpg'



const BlogDetails = () => {
    const { id } = useParams()
    const [blog, setBlog] = React.useState({});

    React.useEffect(() => {
        fetch(`http://localhost:5000/getBlog/${id}`)
            .then(res => res.json())
            .then(blog => setBlog(blog))
    }, [id])


    const { img, title, author, content } = blog;

    return (
        <>
            <section className='relative '>
                <Navbar />
                <div className='h-screen' style={{ backgroundImage: `url(${img})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>

                </div>
                <div className="relative ">
                    <div className="absolute w-3/4 rounded bg-white p-3 md:p-5" style={{ left: '12%', top: '-150px', height: '800px' }}>
                        <h1 className='text-xl md:text-4xl font-bold text-gray-500 pb-4 md:pb-8'>{title}</h1>
                        {/* <p className="text-gray-500">{content}</p> */}
                        <img src={staticImg} alt="" />
                    </div>
                </div>
            </section>

        </>
    )
}


export default BlogDetails