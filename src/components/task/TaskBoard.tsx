import { useTasks } from '@/context/taskContext'
import TaskCard from './TaskCard';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from "react";


function TaskBoard() {
 const{tasks,filteredTasks,filter} = useTasks();

 const showTodo = filter === "all" || filter === "todo";
 const showProgress = filter === "all" || filter === "in-progress";
 const showDone = filter === "all" || filter === "done";

 const todoTasks = filteredTasks.filter(task => task.status === "todo")
 const inProgressTasks = filteredTasks.filter(task => task.status === "in-progress")
 const doneTasks = filteredTasks.filter(task => task.status === "done")

useGSAP(() => {
  const ctx = gsap.context(() => {
    gsap.fromTo(
      ".card",
      { opacity: 0, y: 50,scale: 0.45},
      {
        opacity: 1, 
        y: 0,
        scale: 1,
        stagger: 0.08,
        duration: 0.45,
        ease: "power2.out",
        clearProps: "all",
      } 
    );
  });

  return () => ctx.revert();
}, [filter, filteredTasks.length]);

  return (
      <>
      { filteredTasks.length === 0 ? <p className='text-zinc-500 text-center mt-3'>No tasks added, please add one.</p> : (
        <div className='board space-y-6'>
         {showTodo && (<section >
          <h2 className="text-purple-500 font-semibold p-3 rounded-md text-center text-lg">To do</h2>
          <div className='todo-col grid grid-cols-1 gap-3 xs:grid-cols-2 sm:grid sm:grid-cols-2 sm:gap-1 lg:grid lg:grid-cols-3 lg:gap-3 2xl:grid-cols-4 2xl:gap-4'>
            {todoTasks.length === 0 ? <p className='col-span-full place-self-center text-zinc-500 text-center text-xs sm:text-sm mt-3'>Your "To Do" list in currently clear.</p> : (
              todoTasks.map((task)=>(
            <TaskCard key={task.id} task={task} />
          )))}
          </div>
        </section>)}
        
        {showProgress && (<section>
          <h2 className="text-purple-500 font-semibold p-3 rounded-md text-center text-lg">In Progress</h2>
          <div className='progress-col grid grid-cols-1 gap-3 xs:grid-cols-2 sm:grid sm:grid-cols-2 sm:gap-1 lg:grid lg:grid-cols-3 lg:gap-3 2xl:grid-cols-4 2xl:gap-4'>
          {inProgressTasks.length === 0 ? <p className='col-span-full place-self-center text-zinc-500 text-center text-xs sm:text-sm  mt-3'>The "In-Progress" list is empty.</p> : ( 
            inProgressTasks.map((task)=>(
            <TaskCard key={task.id} task={task} /> 
          )))}
          </div>
        </section>)}
        
        {showDone && (<section>
          <h2 className="text-purple-500 p-3 font-semibold rounded-md text-center text-lg">Done</h2>
          <div className='done-col grid grid-cols-1 gap-3 xs:grid-cols-2 sm:grid sm:grid-cols-2 sm:gap-1 lg:grid lg:grid-cols-3 lg:gap-3 2xl:grid-cols-4 2xl:gap-4'>
          {doneTasks.length === 0 ? <p className='col-span-full place-self-center text-zinc-500 text-center text-xs sm:text-sm mt-3'>The "Completed" list is empty.</p> : (
            doneTasks.map((task)=>(
            <TaskCard key={task.id} task={task} />
          )))}
          </div>
        </section>)}
      </div> 
      )
    }
    </> 
  )
}

export default TaskBoard
