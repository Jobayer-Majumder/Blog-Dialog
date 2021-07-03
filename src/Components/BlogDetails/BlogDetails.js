import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../header/navbar/Navbar';
import staticImg from '../../images/alexis-brown-omeaHbEFlN4-unsplash.jpg'
import { SiFacebook, SiLinkedin, SiTwitter } from 'react-icons/si'
import { FiCalendar } from 'react-icons/fi'
import { BsPencil } from 'react-icons/bs'
import CommentSection from '../CommentSection/CommentSection';


const BlogDetails = () => {
    const { id } = useParams()
    const [blog, setBlog] = React.useState({});

    React.useEffect(() => {
        fetch(`http://localhost:5000/getBlog/${id}`)
            .then(res => res.json())
            .then(blog => setBlog(blog))
    }, [id])


    const { img, title, author, date } = blog;

    return (
        <>
            <section className='bg-gray-100'>
                <Navbar />
                <div className='h-screen' style={{ backgroundImage: `url(${img})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover' }}>

                </div>
                <div className="relative h-40 md:h-screen">
                    <div className="absolute w-5/6 rounded bg-white p-3 md:p-5 shadow" style={{ left: '8%', top: '-150px'}}>
                        <h1 className='text-xl md:text-4xl font-bold text-gray-500 pb-4 md:pb-8 text-center'>{title}</h1>
                        <img src={staticImg} alt="" className='w-4/5 mx-auto rounded' />
                        <div className="flex justify-around py-2">
                            <h1 className="font-bold text-lg text-center uppercase text-gray-500"><BsPencil className='inline'/> {author} </h1>
                            <h1 className='font-bold text-gray-500 lowercase'><FiCalendar className='inline'/> {date}</h1>
                        </div>
                    </div>
                </div>
                <div className="w-11/12 md:w-5/6 mx-auto p-4">
                    <p className="text-gray-600 text-justify">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus distinctio dicta quod. Aliquam ad porro molestias ducimus quam nesciunt. Aperiam, eaque fugit temporibus harum reprehenderit vero fuga dolore, tempore quaerat totam, ullam magnam molestias earum. A mollitia nostrum voluptatem nobis similique vel unde beatae odio tenetur quaerat. Consequuntur modi minus qui optio quod aliquid quaerat consectetur doloremque dolorem cupiditate. Nostrum alias placeat corrupti recusandae molestiae doloribus nesciunt ex dolores necessitatibus in omnis nobis obcaecati eum eligendi porro debitis, nihil vero quam ad ea incidunt quos. Atque voluptas provident voluptatum odit a nemo eveniet quidem facere aliquid! Eos saepe error nemo reprehenderit veniam cum qui aliquam rerum aperiam est dolores temporibus doloremque autem quos explicabo, vel quae inventore sequi doloribus, ipsa earum nisi? Voluptate quisquam quam blanditiis nesciunt, eaque a amet ab harum ut porro sint quod mollitia ratione, deserunt sed corporis molestias possimus voluptatibus beatae praesentium! Natus vero ullam modi ab reprehenderit architecto sunt earum repellendus temporibus, sequi magni quibusdam ipsam velit suscipit quasi. Obcaecati tempora illum quibusdam voluptatum, reprehenderit labore vero recusandae repellendus esse ipsa dolores explicabo exercitationem dolor enim delectus possimus eos qui. Velit architecto impedit officiis modi quia magni voluptate iusto dolores. Debitis dolores reiciendis sed possimus!</p>
                </div>
                <div className="container py-8">
                    <div className="flex justify-evenly">
                        <button className="px-5 py-2 rounded text-white" style={{background: '#3b5999'}}>
                            <SiFacebook className='text-white inline mr-1 text-xl'/> Facebook
                        </button>
                        <button className="px-5 py-2 rounded text-white" style={{background: '#0e76a8'}}>
                            <SiLinkedin className='text-white inline mr-1 text-xl'/> Linkedin
                        </button>
                        <button className="px-5 py-2 rounded text-white" style={{background: '#00acee'}}>
                            <SiTwitter className='text-white inline mr-1 text-xl'/> Twitter
                        </button>
                    </div>
                </div>
                <div className="container mx-auto h-screen">
                    <CommentSection />
                </div>
            </section>

        </>
    )
}


export default BlogDetails