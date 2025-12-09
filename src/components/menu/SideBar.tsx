"use client"
import { IconDashboard, IconHome, IconX } from '@tabler/icons-react'
import React from 'react'
import { useAuth } from '@/context/authContext'

function SideBar({pathname}:{pathname?:string}) {
  const{logout,user} = useAuth();

  return (
    <nav className="sticky top-5 h-[95vh] bg-slate-950/70 backdrop-blur-sm border-r border-slate-800
     rounded-md px-4 py-2">  
      <ul className='flex flex-col gap-3 text-slate-300 hover:text-white'>
        <li className='flex gap-2 items-center py-2 px-4 rounded-md 
        hover:bg-purple-600/70 hover:cursor-pointer transition duration-300'>
        <IconHome stroke={1} size={24} />    
        <span>Home</span>
        </li>
        <li className='flex gap-2 items-center py-2 px-4 rounded-md 
        hover:bg-purple-600/70 hover:cursor-pointer transition duration-300'>
        <IconDashboard stroke={1} size={24} />
        <span className={`${pathname === "/tasks" ? "text-purple-500 font-semibold hover:text-white transition duration-300" : ""}`}>Tasks</span>
        </li>
        <li onClick={logout} className='flex gap-2 items-center py-2 px-4 rounded-md 
        hover:bg-purple-600/70 hover:cursor-pointer transition duration-300'>
        <IconX stroke={1} size={24} color='#f00' className='hover:text-red-500 cursor-pointer' />
        <span>Logout</span>
        </li>
      </ul>
    </nav>
  )
}

export default SideBar
