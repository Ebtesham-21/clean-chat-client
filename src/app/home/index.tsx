"use client";
import React, { useRef, useEffect, useState } from 'react';
import Chat from '../ui/chat';
import Sidebar from '../ui/sidebar';
import Users from '../ui/users';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import {
  useAddMessagesMutation,
  useFetchMessagesBySenderIdQuery,
  useFetchUserQuery,
  useFetchUsersQuery,
} from '@/lib/api';

import {io, Socket} from 'socket.io-client';

import { set } from 'react-hook-form';
import { setUser, setUsers } from '@/lib/features/userSlice';
import { addMessages, addSocketMessage } from '@/lib/features/messageSlice';

export default function Home() {
    const { data: fetchedUser, isLoading: isUserLoading } = useFetchUserQuery("");
   

    useFetchUsersQuery("");


    
    
    const [addMessage, {isLoading: isSendingMessage} ] = useAddMessagesMutation()
    const [loading, setLoading]=useState(true);
    const router = useRouter();
    const usersState = useSelector((state:any) => state.user);
    const messagesState = useSelector((state:any) => state.message);
    const {users, user} = usersState;
    const {messages} = messagesState;
    const [chatUser, setChatUser ] = useState(users[0]);
    const [message, setMessage] = useState("");
    const socket = useRef<Socket | null> (null);
    const [activeUsers, setActiveUsers ] = useState([]);
    const {isLoading: isMessagesLoading, refetch} = useFetchMessagesBySenderIdQuery(chatUser?.id, {
        skip: !chatUser?.id

    })
    
    const dispatch = useDispatch();

    
  
   
    useEffect(() => {
        if(fetchedUser){
            dispatch(setUser(fetchedUser));
        }
    }, [fetchedUser, dispatch]);


    useEffect(() => {
        const token = localStorage&& localStorage.getItem("token");
        if(!token){
            router.push("/login");
            setLoading(false);
        } else {
            setLoading(false);
        }
    }, [router]);

useEffect(() => {socket.current = io("http://localhost:5000", {
        transports: ['websocket'], reconnection:true,
    reconnectionAttempts:5,
    reconnectionDelay: 3000,
    });

socket.current.on("newMessage", (data:any) => {
    dispatch(addSocketMessage(data));
})

}, [])

    


    useEffect(() => {
        if(users.length > 0) {
            setChatUser(users[0])
        }
        socket.current?.emit("addUser", user);
        socket.current?.on("activeUsers", (users)=> {
            console.log(users, "users => broadcasting1");
            if(user){
                const filterUser = users.filter((u) => u.user && u.user.userId !== user?.id);

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


    useEffect(() => {
        if(chatUser?.id) {
            refetch();
        }
    }, [chatUser, refetch]);

    if (loading || isUserLoading) {
  return <div>Loading...</div>;
}


    const chatUserHandler = (user:User) => {
        setChatUser(user)
        
      
    };

    const handleLogout = async () => {
        localStorage.removeItem("token");
        router.push("/login");
        dispatch(setUser(null));
        dispatch(setUsers([]));
        if(socket.current) {
            socket.current.emit("logout", user?.id);
            socket.current.disconnect();

        }

    };

    const sendMessageHandler=async(event:any)=> {

    event.preventDefault();
    if(!message) {
        return alert("add your message ");
    }

    const data = {
        content:message,
        createdAt: Date.now(),
        senderId: user?.id,
        receiverId: chatUser?.id
    }
    dispatch(addMessages(data));
    await addMessage(data).unwrap();
    setMessage("")
    if(socket.current){
      socket.current.emit("sendMessage", data)  
    }
    
}
    return (
        <div>
            <div className='p-[20px]'>
                <div className='flex'>
                    <div className='w-[20%] flex justify-center'>
                        <Sidebar user={user} handleLogout={handleLogout} />
                    </div>
                    <div className='w-[30%] h-[95vh] flex justify-center'>
                        <Users users={users} activeUsers={activeUsers} chatUserHandler={chatUserHandler} />

                    </div>
                    <div className='w-[100%] h-[90vh] items-center flex justify-center'>
                        <Chat chatUser={chatUser} messages={messages} user={user} sendMessageHandler={sendMessageHandler} setMessage={setMessage} message={message}  />


                    </div>

                </div>

            </div>
        </div>
    )}
