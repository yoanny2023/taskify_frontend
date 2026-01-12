import Pagina from '../Pagina'
import {IconListCheck, IconX } from '@tabler/icons-react'
import Link from 'next/link'
import { useTasks } from '@/context/taskContext'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

function MenuModal() {
  const{toggleMenu} = useTasks()

  useGSAP(()=>{
   gsap.from(".gsap_nav",{xPercent:100,ease:"power1.inOut",duration:1})
  },[]);

  return (
    <Pagina>
        <nav className='gsap_nav sm:hidden flex flex-col max-w-[85%] p-3 mx-auto mt-2 rounded-md bg-slate-950/70 backdrop-blur-xl shadow-lg'>
        <div className='flex items-center justify-between p-3 border-b border-zinc-600 font-semibold'>
          <span className="">Menu</span>
          <span className='text-red-500 hover:text-red-700'
          onClick={toggleMenu}
          >
            <IconX size={20} stroke={1} className="cursor-pointer" />
          </span>
        </div>
        <ul className='flex flex-col flex-1 gap-3 mt-3 rounded-lg'>
        <li className='flex items-center gap-1 sm:gap-2 hover:bg-purple-600/70 hover:cursor-pointer transition duration-200 py-2 px-4 rounded-xl'
          onClick={toggleMenu}
        >
          <IconListCheck  stroke={1} size={20} className='text-zinc-100' />
          <Link href="/tasks" className="flex-1">Tasks</Link>
        </li>
        <li className='flex items-center gap-1 sm:gap-2 hover:bg-purple-600/70 hover:cursor-pointer transition duration-200 py-2 px-4 rounded-xl'>
          <IconX  stroke={1} size={20} className='text-zinc-100' />
          <span>Logout</span>
        </li>
          {/* <Footer /> */}
      </ul>
    </nav>
  </Pagina>
  )
}

export default MenuModal
