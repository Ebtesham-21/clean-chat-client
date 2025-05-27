"use client";
import React from 'react';
import { LogoutButton } from '@/app/icons/icons';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';

const Sidebar = ({user, handleLogout}:any) => {
 
  // const handleLogout = async () => {
  //  localStorage.removeItem("token");
  //  router.push("/login")
  //  dispatch(setUser(null))


  // };
  return (
    <div className='w-[100px] h-[95vh] lg:flex flex-col bg-[#6E00FF] rounded-lg justify-between '>
            <div>
                <div className='p-[20px] pt-[10px]  '>
                    <div className='flex flex-col items-center  justify-center'>
                      {user?.profileImage ? (
                        <div>
                        <div className='relative'>
                          <img
                            className='h-10 w-10 rounded-full object-cover'
                            src={item?.profileImage}
                            alt={item?.name}
                          />
                          
                        </div>
                        <div>
                          <p className='text-white '>{user?.name}</p>
                        </div>
                        </div>
                      ):(
                        <div className="relative">
                          <div className='h-10 w-10 users-center flex justify-center bg-blue-500 rounded-full text-white '>
                            <div>{user?.name?.charAt(0).toUpperCase()}</div>
                          </div>
                        
                        </div>
                      )} {""}
                        {/* <p className='h-10 w-10 items-center justify-center flex bg-blue-500 rounded-full text-white mr-3'>
                        <img src={user?.profileImage}/>

                        </p> */}
                    </div>
                </div>
            </div>
            <div className='flex items-center justify-center mb-3 cursor-pointer' onClick={handleLogout} >
                <LogoutButton width="40" height="40"  color = 'blue'/>

            </div>



    </div>

  );
};

export default Sidebar;