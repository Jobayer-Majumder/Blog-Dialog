import React from 'react';
import { IoNotificationsOutline } from 'react-icons/io5';
import { FiSend } from 'react-icons/fi';
import { AiOutlineDislike } from 'react-icons/ai';
import { AiOutlineLike } from 'react-icons/ai';
import commentAvatar from '../../images/6893547.png';

const CommentSection = () => {
    return (
        <>
            <section>
                <div className="">
                    <div className="py-5">
                        <h1>The Conversation</h1>
                        <p>Start a discussion, not a fire. Post with kindness</p>
                    </div>
                    <div className="flex justify-between w-full border-t py-5 px-2">
                        <h4>Sort By - <span className='font-bold'>Best</span> </h4>
                        <div className="flex">
                            <p>have a discuss account ? </p>
                            <IoNotificationsOutline className='inline'/>
                            <button className="px-3">Login</button>
                        </div>
                    </div>
                    <div className="px-2 py-4 flex">
                        <div className="w-2/12 md:w-1/12 flex items-center mr-2">
                            <img src={commentAvatar} alt="" className=''/>
                        </div>
                        <div className="w-full flex items-center relative">
                            <input type="text" className="py-5 px-4 rounded-lg w-4/5 focus:outline-none shadow" placeholder='Leave a comment'/>
                            <FiSend className='absolute right-1/4 text-2xl text-gray-500 cursor-pointer' />
                        </div>
                    </div>
                    <div className="px-2 py-4 flex border rounded">
                        <div className="w-2/12 md:w-1/12 flex items-center mr-3">
                            <img src={commentAvatar} alt="" className=''/>
                        </div>
                        <div className="w-full flex items-center relative text-gray-500">
                            <div>
                                <h3 className='font-bold pb-1'>Jobayer Majumder . <span className='text-sm font-normal'>4h ago</span></h3>
                                <p className='pb-1'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab, iure!</p>
                                <div className='shadow rounded px-3 py-2 flex justify-around text-sm'>
                                    <span>Reply</span>
                                    <span>Likes 5</span>
                                    <span>Dislikes 1</span>
                                    <AiOutlineLike className='inline text-lg' />
                                    <AiOutlineDislike className='inline text-lg' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default CommentSection;