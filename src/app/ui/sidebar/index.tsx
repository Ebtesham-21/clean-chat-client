"use client";
import React from 'react';
import { LogoutButton } from '@/app/icons/icons';
// import { useRouter } from 'next/navigation';
// import { useDispatch } from 'react-redux';

interface User {
  name?: string;
  profileImage?: string;
}

interface SidebarProps {
  user: User;
  handleLogout: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ user, handleLogout }) => {
  return (
    <div className='w-[100px] h-[95vh] lg:flex flex-col bg-[#6E00FF] rounded-lg justify-between '>
      <div>
        <div className='p-[20px] pt-[10px]'>
          <div className='flex flex-col items-center justify-center'>
            {user?.profileImage ? (
              <div>
                <div className='relative'>
                  <img
                    className='h-10 w-10 rounded-full object-cover'
                    src={user.profileImage}
                    alt={user.name}
                  />
                </div>
                <div>
                  <p className='text-white'>{user?.name}</p>
                </div>
              </div>
            ) : (
              <div className="relative">
                <div className='h-10 w-10 flex items-center justify-center bg-blue-500 rounded-full text-white'>
                  <div>{user?.name?.charAt(0).toUpperCase()}</div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className='flex items-center justify-center mb-3 cursor-pointer' onClick={handleLogout}>
        <LogoutButton width="40" height="40" color='blue' />
      </div>
    </div>
  );
};

export default Sidebar;
