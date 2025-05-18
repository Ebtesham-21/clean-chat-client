import React from 'react';
import Register from '@/app/ui/register';

const page = () => {
  return (
    <div className='flex items-center justify-center min-h-screen bg-secondary'>
        <div className='w-full max-w-md space-y-6 p-8 bg-white shadow-lg rounded-lg'>
                <div className='text-2xl font-bold text-center text-primary'>
                    <h1>Create your account</h1>
                    <Register/>
                </div>
              
        </div>
      

    </div>
  )
}

export default page