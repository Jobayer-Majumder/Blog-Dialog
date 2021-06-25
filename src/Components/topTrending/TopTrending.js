import React from 'react';
import SingleTopTrend from './singleTopTrend/SingleTopTrend';
import { CgTrending } from 'react-icons/cg'



const TopTrending = () => {
    const [blogs, setBlogs] = React.useState([])
    const [spinner, setSpinner] = React.useState(true);

    React.useEffect(() => {
        fetch(`http://localhost:5000/getBlogs`)
            .then(res => res.json())
            .then(blogs => {
                setBlogs(blogs)
                setSpinner(false)
            })
    }, [])


    return (
        <>
            <section className='bg-gray-100'>
                <div className="container mx-auto px-4 pt-16 pb-20">
                    <div className='py-12'>
                        <h2 className='p-4 bg-white rounded inline'>
                            <CgTrending className='inline text-3xl text-red-400' />
                        </h2>
                        <h1 className='inline text-xl md:text-3xl font-bold ml-2'>
                            Top Trending
                        </h1>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
                        {
                            spinner && <div className="lds-ring absolute inset-2/4"><div></div><div></div><div></div><div></div></div>
                        }
                        {
                            blogs?.map(data => <SingleTopTrend key={data.id} data={data} />)
                        }
                    </div>
                </div>
            </section>
        </>
    );
};

export default TopTrending;