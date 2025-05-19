import React from 'react';
import { LogoutButton } from '@/app/icons/icons';

const Sidebar = () => {
  return (
    <div className='w-[100px] h-[95vh] lg:flex flex-col bg-[#6E00FF] rounded-lg justify-between '>
            <div>
                <div className='p-[20px] pt-[10px]  '>
                    <div className='flex flex-col items-center  justify-center'>
                        <p>H</p>
                    </div>
                </div>
            </div>
            <div className='flex items-center justify-center mt-3 cursor-pointer'>
                <LogoutButton width="40" height="40"  color = 'blue'/>

            </div>



    </div>

  )
}

export default Sidebar