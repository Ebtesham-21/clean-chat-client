"use client";
import React from 'react'
import {useForm} from "react-hook-form";
import { useRouter } from 'next/router';
import { useLoginMutation } from '@/lib/api';
import {UserData} from '../../../types';
import { useDispatch } from 'react-redux';
import { setUser } from '@/lib/features/userSlice';

const Login = () => {
const [login, {isLoading}] = useLoginMutation();
const dipatch = useDispatch();
const router = useRouter();
const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: {errors},

} = useForm();

  const onSubmit = async(data:UserData) => {
    try{
        console.log(data, "data");
        const result = await login(data).unwrap();
        localStorage.setItem("token", result.token);
        dipatch(setUser(result.user));
        reset();
        router.push("/");

    }
    
    catch(error:any){
        console.log(error?.data, "error");
        alert(error?.data?.message || "Login Failed");
    }


  }
  return (
   <form className='space-y-4' onSubmit={handleSubmit(onSubmit)}>
   
    <div>
        <label className='block text-sm font-medium text-gray-700 '>
            Email
        </label>
        <input 
        {...register("email")}
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
       
        <button type="submit" className='w-full py-2 mt-4 text-white bg-[#6e00ff] rounded-lg hover:bg-[#6e00cf] focus:outline-none'>

            Log In

        </button>
    </div>
       
       
      
   </form>
  )
}

export default Login