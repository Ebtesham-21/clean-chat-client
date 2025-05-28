"use client";
import React from 'react';
import { useForm } from 'react-hook-form';
// import { UserData } from './../../../types';
import { useRouter } from "next/navigation";
import { useSignupMutation } from '@/lib/api';

interface RegisterFormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  profileImage: FileList;
}

const Register = () => {
  const router = useRouter();
  const [signup] = useSignupMutation();
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<RegisterFormData>();

  const onSubmit = async (data: RegisterFormData) => {
    console.log(data, "user DATA");

    try {
      const formData = new FormData();
      if (data.name && data.password && data.email && data.profileImage?.[0]) {
        formData.append("name", data.name);
        formData.append("email", data.email);
        formData.append("password", data.password);
        formData.append("profileImage", data.profileImage[0]);
      }

      await signup(formData).unwrap();
      reset();
      router.push("/login");
    } catch (error: unknown) {
      if (typeof error === "object" && error !== null && "data" in error) {
        const err = error as { data?: { message?: string } };
        alert(err?.data?.message || "Registration Failed");
      } else {
        alert("Registration Failed");
      }
    }
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label className="block text-sm font-medium text-gray-700">User Name</label>
        <input
          {...register("name", { required: "Name is required" })}
          type="text"
          placeholder="user name"
          className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
        />
        {errors.name && <p className="text-sm text-red-500">{errors.name.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "Enter a valid email",
            },
          })}
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
        <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
        <input
          {...register("confirmPassword", {
            required: "Confirm password is required",
            validate: value => value === watch('password') || "Passwords do not match",
          })}
          type="password"
          placeholder="confirm password"
          className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
        />
        {errors.confirmPassword && (
          <p className="text-sm text-red-500">{errors.confirmPassword.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Profile Image</label>
        <input
          {...register("profileImage", {
            required: "Profile Image is required",
          })}
          type="file"
          className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
        />
        {errors.profileImage && (
          <p className="text-sm text-red-500">{errors.profileImage.message}</p>
        )}
      </div>

      <button
        type="submit"
        className="w-full py-2 mt-4 text-white bg-[#6e00ff] rounded-lg hover:bg-[#6e00cf] focus:outline-none"
      >
        Register
      </button>
    </form>
  );
};

export default Register;
