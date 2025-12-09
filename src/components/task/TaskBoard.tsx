import { useTasks } from '@/context/taskContext'
import TaskCard from './TaskCard';

function TaskBoard() {
 const{tasks} = useTasks();

 const todoTasks = tasks.filter(task => task.status === "todo")
 const inProgressTasks = tasks.filter(task => task.status === "in-progress")
 const doneTasks = tasks.filter(task => task.status === "done")

  return (
    <div>
      <section>
        <h2 className="text-purple-500 font-semibold p-3 rounded-md text-center my-3 text-lg">To do</h2>
        <div className='grid grid-cols-3 gap-3'>
          {todoTasks.map((task)=>(
           <TaskCard key={task.id} task={task} />
        ))}
        </div>
      </section>  
      <section>
        <h2 className="text-purple-500 font-semibold p-3 rounded-md text-center my-3 text-lg">In Progress</h2>
        <div className='grid grid-cols-3 gap-3'>
         {inProgressTasks.map((task)=>(
           <TaskCard key={task.id} task={task} />
        ))}
        </div>
      </section>
      <section>
        <h2 className="text-purple-500 p-3 font-semibold rounded-md text-center my-3 text-lg">Done</h2>
        <div className='grid grid-cols-3 gap-3'>
        {doneTasks.map((task)=>(
           <TaskCard key={task.id} task={task} />
        ))}
        </div>
      </section>
    </div>
  )
}

export default TaskBoard
