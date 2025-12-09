"use client"

import Protected from '@/components/protected/Protected';
import Pagina from '@/components/Pagina';
import SideBar from '@/components/menu/SideBar';
import Header from '@/components/header/Header';
import TaskBoard from '@/components/task/TaskBoard';
import AddTaskButton from '@/components/task/AddTaskButton';
import { usePathname } from 'next/navigation';

function TasksPage() {
  const pathname = usePathname();
  return (
    <Protected>
      <Pagina className='grid grid-cols-[250px_auto] gap-3 p-5'>
        <SideBar pathname={pathname} />   
        <main>
          <Header />
          <section className='mt-3 bg-zinc-950/70 rounded-md p-3' >
            <div className='flex justify-between items-center mb-2'>
              <span>Tasks</span>
              <AddTaskButton />
            </div> 
            <TaskBoard /> 
          </section>
        </main>
      </Pagina>
    </Protected>
  )
}

export default TasksPage
