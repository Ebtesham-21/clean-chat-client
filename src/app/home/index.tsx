"use client";
import React, { useEffect, useState } from 'react';
import Chat from '../ui/chat';
import Sidebar from '../ui/sidebar';
import Users from '../ui/users';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';
import { useFetchUserQuery, useFetchUsersQuery } from '@/lib/api';
import {io, Socket} from 'socket.io-client';
import { set } from 'react-hook-form';

export default function Home() {
    useFetchUserQuery("");
    useFetchUsersQuery("");
  
    const [loading, setLoading]=useState(true);
    const router = useRouter();
    const usersState = useSelector((state:any) => state.user);
    const {users, user} = usersState;
    const [chatUser, setChatUser ] = useState(users[0]);
    const socket = useRef<Socket | null> (null);
    const [activeUsers, setActiveUsers ] = useState([]);

    
  
   



    useEffect(() => {
        const token = localStorage&& localStorage.getItem("token");
        if(!token){
            router.push("/login");
            setLoading(false);
        } else {
            setLoading(false);
        }
    }, [router]);

React.useEffect(() => {socket.current = io("http://localhost:5000", {
        transports: ['websocket'], reconnection:true,
    reconnectionAttempts:5,
    reconnectionDelay: 3000,
    });}, [])

    


    useEffect(() => {
        if(users.length > 0) {
            setChatUser(users[0])
        }
        socket.current?.emit("addUser", user);
        socket.current?.on("activeUsers", (users)=> {
            if(user){
                const filterUser = users.filter((u) => u.user.userId!==user.id);
                setActiveUsers(filterUser);
            }
            
        })

    }, [users, user,socket])

    useEffect(() => {
        if(socket.current) {
            socket.current?.on("getUsers", (users) => {
                 if(user){
                const filterUser = users.filter((u) => u.userId!==user.id);
                setActiveUsers(filterUser);
            }

            } );
        }
    }, [socket, user]);



    if(loading) {
        return<div>Loading...</div>;
    }

    const chatUserHandler = (user:any) => {
        setChatUser(user)
        
      
    };
    

    return (
        <div>
            <div className='p-[20px]'>
                <div className='flex'>
                    <div className='w-[20%] flex justify-center'>
                        <Sidebar user={user} />
                    </div>
                    <div className='w-[30%] h-[95vh] flex justify-center'>
                        <Users users={users} activeUsers={activeUsers} chatUserHandler={chatUserHandler} />

                    </div>
                    <div className='w-[100%] h-[90vh] items-center flex justify-center'>
                        <Chat chatUser={chatUser} />


                    </div>

                </div>

            </div>
        </div>
    );
}