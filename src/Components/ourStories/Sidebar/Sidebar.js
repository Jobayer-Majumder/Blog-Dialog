import React from 'react';
import PopularPost from '../popularPost/PopularPost';
import RecentPost from '../RecentPost/RecentPost';

const Sidebar = () => {
    return (
        <>
            <section>
                <PopularPost />
                <RecentPost /> 
            </section>  
        </>
    );
};

export default Sidebar;