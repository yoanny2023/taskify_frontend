import { useTasks } from '@/context/taskContext'
import TaskCard from './TaskCard';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

function TaskBoard() {
 const{tasks,filteredTasks} = useTasks();

 const todoTasks = filteredTasks.filter(task => task.status === "todo")
 const inProgressTasks = filteredTasks.filter(task => task.status === "in-progress")
 const doneTasks = filteredTasks.filter(task => task.status === "done")

  useGSAP(()=>{
    const tl = gsap.timeline();

    tl.from(".board",{opacity:0,scale:0,ease:"power3.inOut",duration:1.5,delay:1})
    tl.from(".todo-col .card", {
      opacity: 0,
      y:30,
      stagger: 0.2,
      duration: 0.4       
    })

    tl.from(".progress-col .card", {
      opacity: 0,
      y: 30,
      stagger: 0.2,
      duration: 0.4
    })

    tl.from(".done-col .card", {
      opacity: 0,
      y: 30,
      stagger: 0.2,
      duration: 0.4   
      })
  },[])  

  return (
      <>
      { filteredTasks.length === 0 ? <p className='text-zinc-500 text-center mt-3'>No tasks added, please add one.</p> : (
        <div className='board'>
        <section>
          <h2 className="text-purple-500 font-semibold p-3 rounded-md text-center my-3 text-lg">To do</h2>
          <div className='todo-col grid grid-cols-1 gap-3 xs:grid-cols-2 sm:grid sm:grid-cols-2 sm:gap-1 lg:grid lg:grid-cols-3 lg:gap-3 2xl:grid-cols-4 2xl:gap-4'>
            {todoTasks.map((task)=>(
            <TaskCard key={task.id} task={task} />
          ))}
          </div>
        </section>  
        <section>
          <h2 className="text-purple-500 font-semibold p-3 rounded-md text-center my-3 text-lg">In Progress</h2>
          <div className='progress-col grid grid-cols-1 gap-3 xs:grid-cols-2 sm:grid sm:grid-cols-2 sm:gap-1 lg:grid lg:grid-cols-3 lg:gap-3 2xl:grid-cols-4 2xl:gap-4'>
          {inProgressTasks.map((task)=>(
            <TaskCard key={task.id} task={task} />
          ))}
          </div>
        </section>
        <section>
          <h2 className="text-purple-500 p-3 font-semibold rounded-md text-center my-3 text-lg">Done</h2>
          <div className='done-col grid grid-cols-1 gap-3 xs:grid-cols-2 sm:grid sm:grid-cols-2 sm:gap-1 lg:grid lg:grid-cols-3 lg:gap-3 2xl:grid-cols-4 2xl:gap-4'>
          {doneTasks.map((task)=>(
            <TaskCard key={task.id} task={task} />
          ))}
          </div>
        </section>
      </div> 
      )
    }
    </> 
  )
}

export default TaskBoard
