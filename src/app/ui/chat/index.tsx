'use client';
import {useRouter} from 'next/navigation';
import React, {useEffect, useState} from 'react';

const Chat = ({chatUser, user, messages}) => {




  

  return (
    <div className='w-[90%] h-[80vh] rounded-lg shadow-md shadow-[#79c5ef] flex flex-col'>
      {/* Header */}
      <div className='flex items-center p-4 bg-gray-100 border-b border-gray-300'>
        {chatUser?.profileImage ? (
          <img
            src={chatUser?.profileImage}
            alt={chatUser?.name}
            className='h-10 w-10 rounded-full object-cover mr-3'
          />
        ) : (
          <div className='h-10 w-10 flex items-center justify-center bg-blue-500 rounded-full text-white mr-3'>
            {chatUser?.name?.charAt(0).toUpperCase()}
          </div>
        )}
        <div>
          <h2 className='text-lg font-semibold text-gray-800'>{chatUser?.name}</h2>
          {/* <p className='text-sm text-gray-500'>Typing...</p> */}
        </div>
      </div>
      <div className='flex flex-col h-full bg-white'>
        {messages&& +messages?.length > 0 ?messages.map((msg:any, index:any) => 
          
            <div key={index} className='flex-1 overfolw-auto p-4 space-y-4'>
              <div className={msg.send'flex justify-end'}>
                <div className='bg-blue-500 text-white p-3 rounded-lg max-xs relative'>
                  {msg?.content}

                </div>
              </div>

            </div>
          


        ):false}
        </div>
      </div>

   

     
  );
};

export default Chat;
