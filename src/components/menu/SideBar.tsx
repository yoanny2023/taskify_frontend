"use client"
import {IconListCheck,IconX } from '@tabler/icons-react'
import { useAuth } from '@/context/authContext'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Link from 'next/link';
import Footer from '../footer/Footer';

function SideBar({pathname}:{pathname?:string}) {
  const{logout} = useAuth();

useGSAP(()=>{
      gsap.from(".side_menu",{xPercent:-100,opacity:0,ease:"power3.inOut",duration:2})
    },[])   
   
  return (
    <nav className="hidden side_menu sm:block sm:fixed sm:top-4 sm:left-4 sm:w-[250px] sm:h-[calc(100vh-2rem)] bg-slate-950/70 backdrop-blur-sm border-r border-slate-800
      px-4 py-2 rounded-md">    
      <ul className='flex flex-col gap-3 h-full text-slate-300 hover:text-white'>
        <li className={`flex gap-2 items-center py-2 px-4 rounded-md 
        hover:bg-purple-600/70 hover:cursor-pointer transition duration-300
        ${pathname === "/tasks" ? "text-purple-500 font-semibold hover:text-white transition duration-300" : ""}
        `}>  
        <IconListCheck stroke={1} size={24} />  
        <Link href="/tasks" className="flex-1">Tasks</Link>
        </li>
        <li onClick={logout} className='flex gap-2 items-center py-2 px-4 rounded-md 
        hover:bg-purple-600/70 hover:cursor-pointer transition duration-300'>
        <IconX stroke={1} size={24} color='#f00' className='hover:text-red-500 cursor-pointer' />
        <span className='flex-1'>Logout</span>
        </li>
        <Footer />
      </ul>
    </nav>
  )
}

export default SideBar
