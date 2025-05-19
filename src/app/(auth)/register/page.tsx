import React from 'react';
import Register from '@/app/ui/register';
import Link from 'next/link';

const page = () => {
  return (
    <div className='flex items-center justify-center min-h-screen bg-secondary'>
        <div className='w-full max-w-md space-y-6 p-8 bg-white shadow-lg rounded-lg'>
               
                    <h2 className='text-2xl font-bold text-center text-primary'>Create your account</h2>
                    <Register/>
                    <p className='text-center'>
                      Have an account ? { ' '}
                    <Link href="/login" className='text-indigo-500 hover:underline'>
                     Sign In
                    </Link>
                    </p>
                   
             
              
        </div>
      

    </div>
  )
}

export default page