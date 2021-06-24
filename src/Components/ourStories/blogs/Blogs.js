import React from 'react';
import SingleBlog from '../singleBlog/SingleBlog';

const Blogs = () => {
    const [blogs, setBlogs] = React.useState([])
    const [spinner, setSpinner] = React.useState(true);

    React.useEffect(() => {
        fetch(`http://localhost:5000/getBlogs`)
            .then(res => res.json())
            .then(blogs => {
                setBlogs(blogs)
                setSpinner(false)
            })
    })


    return (
        <>
            <article className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-5 relative">
                {
                    spinner && <div class="lds-ring absolute inset-2/4"><div></div><div></div><div></div><div></div></div>
                }
                {
                    blogs.map(blog => <SingleBlog key={blog.id} blog={blog} />)
                }
            </article>
        </>
    );
};

export default Blogs;