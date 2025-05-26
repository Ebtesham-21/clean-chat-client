"use client";
import React, { useEffect, useState } from 'react';
import Chat from '../ui/chat';
import Sidebar from '../ui/sidebar';
import Users from '../ui/users';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Home() {
    const [loading, setLoading]=useState(true);
    const router = useRouter();



    useEffect(() => {
        const token = localStorage&& localStorage.getItem("token");
        if(!token){
            router.push("/login");
        } else {
            setLoading(false);
        }
    }, [])

    if(loading) {
        return<div>Loading...</div>
    }
    return (
        <div>
            <div className='p-[20px]'>
                <div className='flex'>
                    <div className='w-[20%] flex justify-center'>
                        <Sidebar />
                    </div>
                    <div className='w-[30%] h-[95vh] flex justify-center'>
                        <Users/>

                    </div>
                    <div className='w-[100%] h-[90vh] items-center flex justify-center'>
                        <Chat/>

                    </div>

                </div>

            </div>
        </div>
    );
}