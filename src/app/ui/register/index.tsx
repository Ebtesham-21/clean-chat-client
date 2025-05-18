import React from 'react'

const Register = () => {
  return (
   <form className='space-y-4'>
    <div>
        <label className='block text-sm font-medium text-gray-700 '>
            User Name
        </label>
        <input 
        type="text" 
        placeholder='user name' 
        className='w-full  px-4 py-2 mt-1 border  rounded-lg  focus:outline-none focus:ring-2 focus:ring-primary'
        />
    </div>
    <div>
        <label className='block text-sm font-medium text-gray-700 '>
            Email
        </label>
        <input 
        type="email" 
        placeholder='email' 
        className='w-full  px-4 py-2 mt-1 border  rounded-lg  focus:outline-none focus:ring-2 focus:ring-primary'
        />
    </div>
    <div>
        <label className='block text-sm font-medium text-gray-700 '>
            Password
        </label>
        <input 
        type="password" 
        placeholder='password' 
        className='w-full  px-4 py-2 mt-1 border  rounded-lg  focus:outline-none focus:ring-2 focus:ring-primary'
        />
    </div>
    <div>
        <label className='block text-sm font-medium text-gray-700 '>
          Confirm  Password
        </label>
        <input 
        type="password" 
        placeholder='confirm password' 
        className='w-full  px-4 py-2 mt-1 border  rounded-lg  focus:outline-none focus:ring-2 focus:ring-primary'
        />
    </div>
    <div>
        <label className='block text-sm font-medium text-gray-700 '>
          Profile Image
        </label>
        <input 
        type="file" 
       
        className='w-full  px-4 py-2 mt-1 border  rounded-lg  focus:outline-none focus:ring-2 focus:ring-primary'
        />

        <button type="submit" className='w-full py-2 mt-4 text-white bg-[#6e00ff] rounded-lg hover:bg-[#6e00cf] focus:outline-none'>

            Register

        </button>
    </div>
       
       
      
   </form>
  )
}

export default Register