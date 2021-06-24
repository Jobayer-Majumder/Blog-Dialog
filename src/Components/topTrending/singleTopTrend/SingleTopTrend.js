import React from 'react';



const SingleTopTrend = ({ data }) => {
    const { img, title, date } = data;

    return (
        <>
            <div className="group hover:opacity-75 cursor-pointer" >
                <div className="relative overflow-hidden" >
                    <img src={img} alt="" style={{ height: '250px', width: '100%' }} className='transform transition duration-500 hover:scale-110'/>
                    <div className='absolute bottom-2 left-2'>
                        <p className='text-white'>{date}</p>
                        <h1 className='text-white'>{title}</h1>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleTopTrend;