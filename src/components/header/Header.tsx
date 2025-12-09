"use client"
import { useAuth } from '@/context/authContext'

function Header() {
  const{user} = useAuth();

  return (
    <header className="sticky top-5 z-10 h-16 w-full bg-neutral-900/80 border-b border-slate-800
      flex items-center p-3 rounded-md">
      <h2 className='mr-auto text-xl text-slate-200 font-bold'>Welcome, {user?.username.charAt(0).toUpperCase()}{user?.username.slice(1)} 👋 </h2>
      <div className=' flex justify-center items-center gap-3'>
        <span className='flex justify-center items-center bg-black w-12 h-12 p-2 rounded-full
         border border-purple-600'>{user?.username.charAt(0).toUpperCase()}
        </span>
      </div>
    </header>
  )
}

export default Header
