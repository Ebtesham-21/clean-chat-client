import React from 'react'

const Chat = () => {
    const user = {id: "5", name: "Zyx", profileImage: "https://via.placeholder.com/150"};
  return (
   <div className='w-[90%] h-[85vh] lg:block bg-white shadow-md shadow-[#79c5ef]'>
        <div className='flex items-center p-4 bg-gray-100 border-b border-gray-300'>
            <div>
                {user?.profileImage?(<img
                    src={user?.profileImage}
                    alt={user?.name}
                    className='h-10 w-10 rounded-full object-cover mr-3'
                />):(
                <div className='h-10 w-10 flex items-center justify-center bg-blue-500 rounded-full text-white mr-3'>
                    {user?.name?.charAt(0).toUpperCase()}
                </div>
                )}
            </div>
            <div>
                <h2 className='text-lg font-semibold text-gray-800'>
                    {user?.name}
                </h2>
                <p className='text-sm text-gray-500'>
                    Typing...
                </p>
            </div>

        </div>
        <div className='flex justify-end'>
            <div className='bg-blue-500 text-white  p-3 rounded-lg max-w-xs relative'>
                <p>Hi chat</p>


            </div>
            <span className='text-xs text-gray-500 bottom-0 float-right p-1'>

                    10:40AM

            </span>

        </div>


   </div>

  )
}

export default Chat