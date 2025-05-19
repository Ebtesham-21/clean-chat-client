import React from 'react';

const Chat = () => {
  const user = {
    id: "5",
    name: "Zyx",
    profileImage: "https://via.placeholder.com/150"
  };

  return (
    <div className='w-[90%] h-[80vh] rounded-lg shadow-md shadow-[#79c5ef] flex flex-col'>
      {/* Header */}
      <div className='flex items-center p-4 bg-gray-100 border-b border-gray-300'>
        {user?.profileImage ? (
          <img
            src={user.profileImage}
            alt={user.name}
            className='h-10 w-10 rounded-full object-cover mr-3'
          />
        ) : (
          <div className='h-10 w-10 flex items-center justify-center bg-blue-500 rounded-full text-white mr-3'>
            {user?.name?.charAt(0).toUpperCase()}
          </div>
        )}
        <div>
          <h2 className='text-lg font-semibold text-gray-800'>{user.name}</h2>
          <p className='text-sm text-gray-500'>Typing...</p>
        </div>
      </div>

      {/* Chat Messages */}
      <div className='flex-1 overflow-y-auto p-4 space-y-4'>
        <div className='flex justify-end'>
          <div className='bg-blue-500 text-white p-3 rounded-lg relative'>
            Hi!
          </div>
        </div>
        {/* Add more messages here */}
      </div>

      {/* Message Input - sticks to bottom */}
      <div className='p-4 bg-white border-t border-gray-300'>
        <form className='flex items-center space-x-2'>
          <input
            className='flex-1 rounded-md focus:outline-none'
            placeholder='Type a message...'
          />
          <button
            type='submit'
            className='ml-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600'
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Chat;
