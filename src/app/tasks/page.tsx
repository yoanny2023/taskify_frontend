"use client"

import Protected from '@/components/protected/Protected';
import Pagina from '@/components/Pagina';
import SideBar from '@/components/menu/SideBar';
import Header from '@/components/header/Header';
import TaskBoard from '@/components/task/TaskBoard';
import AddTaskButton from '@/components/task/AddTaskButton';
import { usePathname } from 'next/navigation';
import { useTasks } from '@/context/taskContext';
import MenuModal from '@/components/menu/MenuModal';

function TasksPage() {
  const pathname = usePathname();
  const{showMenu} = useTasks()   
      
  return (
    <Protected>
      <Pagina className='flex flex-col relative min-h-screen py-4'>
        <SideBar pathname={pathname} />      
        <main className='pt-[calc(4rem+1rem)] w-full sm:ml-[calc(250px+2rem)] sm:w-[calc(100%-250px-3rem)]
        flex flex-col flex-1 gap-3'>  
          <Header />    
          {showMenu ? <MenuModal /> : (
          <section className='flex-1 bg-zinc-950/70 rounded-md p-3 overflow-y-auto' >
            <div className='flex justify-between items-center'>
              <span>Tasks</span>
              <AddTaskButton />  
            </div> 
            <TaskBoard /> 
          </section>
      )
        } 
        </main>
      </Pagina>
    </Protected>
  )
}

export default TasksPage
