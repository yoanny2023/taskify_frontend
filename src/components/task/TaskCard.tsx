import { useTasks } from "@/context/taskContext";
import { IconTrash,IconPencil } from "@tabler/icons-react";
import React from "react";

type TaskStatus = "todo" | "in-progress" | "done";

type Task = {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
  createdAt: string;
};

type TaskCardProps = {
  task: Task;
};  

export default function TaskCard({ task }: TaskCardProps) {
  const{updateTaskStatus,updateTask,deleteTask} = useTasks();

  const [isEditing, setIsEditing] = React.useState(false)
  const [title, setTitle] = React.useState(task.title)
  const [description, setDescription] = React.useState(task.description) 

  const nextStatus = (s: TaskStatus) =>
  s === "todo" ? "in-progress" : s === "in-progress" ? "done" : "todo";

  return (
    <div className="card bg-white/10 backdrop-blur-md border border-white/20     
    shadow-xl shadow-black/30  p-4 rounded-xl
    flex flex-col gap-3 border border-zinc-700
    hover:bg-white/15 hover:border-purple-500/40 hover:shadow-purple-500/20 
    hover:scale-105 transition duration-300 will-change-transform ">
      {isEditing ? (
      <>  
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="bg-zinc-900 border border-zinc-600 p-2 rounded text-sm"
        />

        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="bg-zinc-900 border border-zinc-600 p-2 rounded text-sm"
        />

        <button
          onClick={() => {
            updateTask (task.id, { title, description })
            setIsEditing(false)
          }}
          className="bg-purple-600 hover:bg-purple-700 text-white text-sm p-2 rounded"
        >
          Save
        </button>
      </>
    ) : (
      <div className="relative">
        <h3 className="font-semibold text-white">{task.title}</h3>
        <p className="text-zinc-400 text-sm">{task.description}</p>
        <span className="text-xs text-zinc-500">
          {new Date(task.createdAt).toLocaleDateString()}
        </span>
        <div className="flex flex-wrap gap-2 mt-2">
          <button
            onClick={() =>
              updateTaskStatus(task.id, nextStatus(task.status))
            }
            className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-xs cursor-pointer transition duration-300"
          >
            Next Status
          </button>
          <IconPencil stroke={1} size={22}
            onClick={() => setIsEditing(true)}
            className="absolute -right-1 text-yellow-500 hover:text-yellow-600 cursor-pointer transition duration-300"
          />
          <IconTrash stroke={1} size={18}
            onClick={() => deleteTask(task.id)}
            className="absolute -top-3 -right-1 text-red-500 hover:text-red-600 cursor-pointer transition duration-300"
          />
        </div>
      </div>
    )}
    </div>
  );
}
