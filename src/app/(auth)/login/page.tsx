import React from 'react';
import Login from '@/app/ui/login/page';

const page = () => {
  return (
    <div className='flex items-center justify-center min-h-screen bg-secondary'>
        <div className='w-full max-w-md space-y-6 p-8 bg-white shadow-lg rounded-lg'>
               
                    <h2 className='text-2xl font-bold text-center text-primary'>Create your account</h2>
                    <Login/>
             
              
        </div>
      

    </div>
  )
}

export default page