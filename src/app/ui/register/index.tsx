"use client";
import React, { use } from 'react';
import {useForm } from 'react-hook-form';
import {UserData} from './../../../types';
import {useRouter} from "next/navigation";
import { useSignupMutation } from '@/lib/api';
const Register = () => {
    const router = useRouter();
    const [signup]=useSignupMutation();
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: {errors},
    } = useForm();

    const onSubmit = async(data:UserData) => {
        console.log(data, "user DATA");
        try{
            const formData = new FormData();
        if(data.name&&data.password&&data.email&&data.profileImage) {
            formData.append("name", data.name);
            formData.append("email", data.email);
            formData.append("password", data.password);
            formData.append("profileImage", data.profileImage[0]);
          
        }

        await signup(formData).unwrap();
        reset();
        router.push("/login");
        } catch(error:any){
            alert(error?.data?.message || "Registration Failed" )

        };
        



        
    }
  
  return (
   <form className='space-y-4' onSubmit={handleSubmit(onSubmit)}>
    <div>
        <label className='block text-sm font-medium text-gray-700 '>
            User Name
        </label>
        <input 
        {...register("name", {required: "Name is required"})}
        type="text" 
        placeholder='user name' 
        className='w-full  px-4 py-2 mt-1 border  rounded-lg  focus:outline-none focus:ring-2 focus:ring-primary'
        />
        {errors&&errors.name && errors.name.message &&(<p className='text-sm text-red-500'>{
            typeof errors.name.message === 'string' ? errors.name.message : "Invalid Input"
            }</p>) }
    </div>
    <div>
        <label className='block text-sm font-medium text-gray-700 '>
            Email
        </label>
        <input 
         {...register("email", {required: "Email is required", pattern: {
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 
            message: "Enter a valid email "}})}
        type="email" 
        placeholder='email' 
        className='w-full  px-4 py-2 mt-1 border  rounded-lg  focus:outline-none focus:ring-2 focus:ring-primary'
        />
        {errors&&errors.email && errors.email.message &&(<p className='text-sm text-red-500'>{
            typeof errors.email.message === 'string' ? errors.email.message : "Invalid Input"
            }</p>) }
    </div>
    <div>
        <label className='block text-sm font-medium text-gray-700 '>
            Password
        </label>
        <input 
         {...register("password", {required: "Password is required"})}
        type="password" 
        placeholder='password' 
        className='w-full  px-4 py-2 mt-1 border  rounded-lg  focus:outline-none focus:ring-2 focus:ring-primary'
        />
         {errors&&errors.password && errors.password.message &&(<p className='text-sm text-red-500'>{
            typeof errors.password.message === 'string' ? errors.password.message : "Invalid Input"
            }</p>) }
    </div>
    <div>
        <label className='block text-sm font-medium text-gray-700 '>
          Confirm  Password
        </label>
        <input 
          {...register("Confirmpassword", {required: "Password is required", 
            validate: value => value === watch('password') || "Passwords do not match"
          })}
        type="password" 
        placeholder='confirm password' 
        className='w-full  px-4 py-2 mt-1 border  rounded-lg  focus:outline-none focus:ring-2 focus:ring-primary'
        />
         {errors&&errors.confirmPassword && errors.confirmPassword.message &&(<p className='text-sm text-red-500'>{
            typeof errors.confirmPassword.message === 'string' ? errors.confirmPassword.message : "Invalid Input"
            }</p>) }
    </div>
    <div>
        <label className='block text-sm font-medium text-gray-700 '>
          Profile Image
        </label>
        <input 
        {...register("profileImage", {
            required:"Profile Image is required",
        })}
        type="file" 
       
        className='w-full  px-4 py-2 mt-1 border  rounded-lg  focus:outline-none focus:ring-2 focus:ring-primary'
        />
           {errors&&errors.profileImage && errors.profileImage.message &&(<p className='text-sm text-red-500'>{
            typeof errors.profileImage.message === 'string' ? errors.profileImage.message : "Invalid Input"
            }</p>) }

        <button type="submit" 
        // disabled={}
        className='w-full py-2 mt-4 text-white bg-[#6e00ff] rounded-lg hover:bg-[#6e00cf] focus:outline-none'>

            Register

        </button>
    </div>
       
       
      
   </form>
  )
}

export default Register