"use client"
import { useAuth } from '@/context/authContext'
import { useTasks } from '@/context/taskContext';
import { useGSAP } from '@gsap/react';
import { IconMenuDeep } from '@tabler/icons-react';
import gsap from 'gsap';

function Header() {
  const{user} = useAuth();
  const{showMenu,toggleMenu} = useTasks()

  useGSAP(()=>{      
    const tl = gsap.timeline();
    tl.from(".header",{yPercent:-100,opacity:0,ease:"power3.inOut",duration:2})
    tl.from(".title",{opacity:0,ease:"power3.inOut",duration:1})
  },[])

  return (  
    <header className="header fixed top-4 sm:left-4 sm:left-[calc(250px+2rem)]
     z-20 h-16 w-[calc(100%-1rem)] sm:w-[calc(100%-250px-3rem)]
    bg-neutral-900/80 border-b border-slate-800  
      flex items-center p-3 rounded-md">
      <h2 className='title mr-auto text-sm md:text-xl text-slate-200 font-bold'>Welcome, {user?.username.charAt(0).toUpperCase()}{user?.username.slice(1)} 👋 </h2>
      <div className=' flex justify-center items-center gap-3'>
        <span className='flex justify-center items-center bg-black w-8 h-8 md:w-12 md:h-12 p-2 rounded-full
         border border-purple-600'>{user?.username.charAt(0).toUpperCase()}
        </span>
      </div>
      {showMenu ? "" : <IconMenuDeep size={24} stroke={1} className='sm:hidden text-purple-500 ml-2 cursor-pointer' onClick={toggleMenu} />  }
    </header>
  )
}

export default Header
