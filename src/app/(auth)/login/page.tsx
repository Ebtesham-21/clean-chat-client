import React from 'react';
import Login from '@/app/ui/login/page';
import Link from 'next/link';

const page = () => {
  return (
    <div className='flex items-center justify-center min-h-screen bg-secondary'>
        <div className='w-full max-w-md space-y-6 p-8 bg-white shadow-lg rounded-lg'>
               
                    <h2 className='text-2xl font-bold text-center text-primary'>Create your account</h2>
                    <Login/>
                    <p className='text-center'>
                     Don't have an account ? { ' '}
                    <Link href="/register" className='text-indigo-500 hover:underline'>
                     Register
                    </Link>
                    </p>
             
              
        </div>
      

    </div>
  )
}

export default page