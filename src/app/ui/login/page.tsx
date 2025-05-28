"use client";
import React from 'react';
import { useForm } from "react-hook-form";
import { useRouter } from 'next/navigation';
import { useLoginMutation, useFetchUsersQuery } from '@/lib/api';
import { UserData } from '../../../types';
import { useDispatch } from 'react-redux';
import { setUser } from '@/lib/features/userSlice';

const Login = () => {
  const [login] = useLoginMutation();
  const { refetch } = useFetchUsersQuery("");
  const dispatch = useDispatch();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Pick<UserData, 'email' | 'password'>>(); // Only use necessary fields

  const onSubmit = async (data: Pick<UserData, 'email' | 'password'>) => {
    try {
      const result = await login(data).unwrap();
      localStorage.setItem("token", result.token);
      dispatch(setUser(result.user));
      refetch?.();
      reset();
      router.push("/");
    } catch (error: unknown) {
      if (typeof error === 'object' && error !== null && 'data' in error) {
        const err = error as { data?: { message?: string } };
        alert(err?.data?.message || "Login Failed");
      } else {
        alert("Login Failed");
      }
    }
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input
          {...register("email", { required: "Email is required" })}
          type="email"
          placeholder="email"
          className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
        />
        {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Password</label>
        <input
          {...register("password", { required: "Password is required" })}
          type="password"
          placeholder="password"
          className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
        />
        {errors.password && <p className="text-sm text-red-500">{errors.password.message}</p>}
      </div>

      <div>
        <button
          type="submit"
          className="w-full py-2 mt-4 text-white bg-[#6e00ff] rounded-lg hover:bg-[#6e00cf] focus:outline-none"
        >
          Log In
        </button>
      </div>
    </form>
  );
};

export default Login;
