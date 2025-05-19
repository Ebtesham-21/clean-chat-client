import React from 'react';


const userslist = [{id:"1", name: 'John', profileImage:'https://via.placeholder.com/150'}, {id:"2", name: 'Robin', profileImage:'https://via.placeholder.com/150'}, {id:"3", name: 'Sakib', profileImage:'https://via.placeholder.com/150'}, {id:"4", name: 'Tarek', profileImage:'https://via.placeholder.com/150'}, {id:"5", name: 'Tarek', profileImage:'https://via.placeholder.com/150'}, {id:"5", name: 'Tarek'} ]

interface User{
    id?:string;
    name?:string;
    profileImage?:string;


}

const Users = () => {
  return (
    <div className="w-[100%] h-[95vh] hidden lg:block rounded-lg">
        <div >
            <p className='text-black text-xl font-bold pt-[1rem] pb-[1rem]'> People</p>
            <div className='h-[550px] overflow-y-auto scrollbar-medium rounded-lg bg-white shadow-sm shadow-[#C4E3F4]'>
                {userslist.map((item:User ) => {
                    return (
                        <div key={item?.id}
                        className='flex cursor-pointer items-center justify-between py-4 px-4 border-gray-200 hover:bg-gray-100'
                        >
                                <div className='flex items-center space-x-4 relative '>
                                   {item.profileImage?(
                                    <div className='relative'>
                                        <img className='h-10 w-10 rounded-full object-cover' src={item?.profileImage} alt={item?.name}/>
                                        <span className='top-0 left-7 absolute w-3.5 h-3.5 bg-green-400 border-2 border-white  dark: border-gray-300'/>
                                    </div>
                                   ):(<div className='relative'>
                                        <div className='h-10 w-10 items-center flex justify-center bg-blue-500 rounded-full text-white'>

                                             <div>{item?.name?.charAt(0).toUpperCase()}</div>   

                                        </div>



                                   </div>)} {""}
                                

                                </div>

                        </div>
                    )
                })}

            </div>
        </div>
       
    </div>
  )
}

export default Users