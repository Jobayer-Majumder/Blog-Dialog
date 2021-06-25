import React from 'react';
import { Link, useHistory, Switch, Route } from 'react-router-dom';
import Navbar from '../../Components/header/navbar/Navbar';
import ManageBlog from '../../Components/ManageBlog/ManageBlog';
import PublishBlog from '../../Components/PublishBlog/PublishBlog';

const Admin = () => {
    const { location } = useHistory();


    return (
        <>

            <section className='min-h-screen bg-gray-100'>
                <Navbar />
                <div className="container mx-auto mt-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
                        <div className="p-1 text-center text-gray-500 shadow rounded-lg">
                            <h1 className='py-2 mt-2 hover:bg-indigo-400 hover:text-white rounded'><Link to={`${location.pathname}/publishBlog`}>Publish Blog</Link></h1>
                            <h1 className='py-2 hover:bg-indigo-400 hover:text-white rounded'><Link to={`${location.pathname}/manageBlog`}>Manage Blog</Link></h1>
                            <h1 className='py-2 hover:bg-indigo-400 hover:text-white rounded'><Link to={`${location.pathname}/settings`}>Settings</Link></h1>
                            <h1 className='py-2 mb-2 hover:bg-indigo-400 hover:text-white rounded'><Link to={`${location.pathname}/settings`}>Log Out</Link></h1>
                        </div>
                        <div className="col-span-2 rounded-lg bg-white">
                            <Switch>
                                {/* <Route path={`/admin`}>
                                    <PublishBlog />
                                </Route> */}
                                <Route path={`${location.pathname}/publishBlog`}>
                                    <PublishBlog />
                                </Route>
                                <Route path={`${location.pathname}/manageBlog`}>
                                    <ManageBlog />
                                </Route>
                            </Switch>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Admin;