import React from 'react';
import Header from '../../Components/header/header'
import OurStories from '../../Components/ourStories/OurStories';
import TopTrending from '../../Components/topTrending/TopTrending';


const Home = () => {
    return (
        <>
            <Header />
            <TopTrending />
            <OurStories />
        </>
    );
};

export default Home;