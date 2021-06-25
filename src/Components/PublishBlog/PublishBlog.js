import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";


const PublishBlog = () => {
    const [imgUrl, setImgUrl] = React.useState({})
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = ({ title, content, author }) => {
        const blogData = new FormData()
        blogData.title = title;
        blogData.author = author;
        blogData.content = content;
        blogData.date = new Date();
        blogData.img = imgUrl.display_url;

        fetch(`http://localhost:5000/addBlog`, {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(blogData)
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }


    const handleImageUpload = e => {
        const img = e.target.files[0];
        const imgData = new FormData();
        imgData.set('key', 'ab93c14ad00c0733b90a5cf408bcf7a2');
        imgData.append('image', img);

        axios.post('https://api.imgbb.com/1/upload', imgData)
            .then(response => {
                setImgUrl(response.data.data);
            })
            .catch(error => {
                console.log(error);
            });
    }

    return (
        <>
            <section className='py-5 px-3'>
                <h1 className='text-lg text-gray-500 py-3 font-bold'>Publish Blog</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8">
                        <div className="py-5">
                            <input className='py-3 px-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-gray-300' {...register("title", { required: true })} placeholder='Enter Blog Title' />
                            {errors.title && <span className='text-red-500'>The blog title is required</span>}
                        </div>
                        <div className="py-5">
                            <input className='py-3 px-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-gray-300' {...register("author", { required: true })} placeholder='Author Name' />
                            {errors.author && <span className='text-red-500'>Author Name is required</span>}
                        </div>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8">
                        <div className="py-5">
                            <textarea className='py-3 px-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-gray-300' {...register("content", { required: true })} placeholder='Write Blog Content...' rows='6'/>
                            {errors.content && <span className='text-red-500'>The Blog field is required</span>}
                        </div>
                        <div className="pb-5 pt-3">
                            <input type='file' className='py-3 w-full' {...register("image", { required: true })} onChange={handleImageUpload} />
                            {errors.image && <span className='text-red-500'>This file is required</span>}
                        </div>
                    </div>
                    <input type="submit" className='py-3 w-1/4 cursor-pointer font-bold rounded text-gray-500'/>
                </form>
            </section>
        </>
    );
};

export default PublishBlog;