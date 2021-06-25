import React from 'react';



const ManageBlog = () => {
    const [blogs, setBlogs] = React.useState([]);
    const [spinner, setSpinner] = React.useState(true);


    React.useEffect(() => {
        fetch(`http://localhost:5000/getBlogs`)
            .then(res => res.json())
            .then(blogs => {
                setBlogs(blogs)
                setSpinner(false)
            })
    }, []);

    const handleDeleteBlog = id => {
        fetch(`http://localhost:5000/deleteBlog/${id}`,{
            method: 'DELETE',
        })
        .then(res => res.json())
        .then(result => {
            if(result){
                alert('Blog Deleted')
            }
        })
    }



    return (
        <>
            <section className='py-5 px-3 relative'>
                <h1 className='text-lg font-bold text-gray-500 py-3'>Manage Blogs</h1>
                {
                    spinner && <div className="lds-ring absolute inset-2/4"><div></div><div></div><div></div><div></div></div>
                }
                <table className='w-full'>
                    <thead className='bg-gray-100 text-gray-500'>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Publish Date</th>
                        <th>Action</th>
                    </thead>
                    {
                        blogs.map(blog => <tbody className='text-sm text-center text-gray-500' key={blog._id}>
                                <td className='py-2'>{blog.title}</td>
                                <td>{blog.author}</td>
                                <td>{blog.date}</td>
                                <td onClick={() => handleDeleteBlog(blog._id)}>Delete</td>
                        </tbody>
                        )
                    }
                </table>
            </section>
        </>
    );
};

export default ManageBlog;