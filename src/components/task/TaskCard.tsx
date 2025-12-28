import { useTasks } from "@/context/taskContext";
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
    <div className="bg-zinc-800 p-4 rounded-xl shadow-md flex flex-col gap-3 border border-zinc-700
    hover:bg-zinc-950 hover:shadow-purple-600 hover:shadow-lg hover:scale-105 transition duration-300 ">
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
      <div className="card">
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
          <button
            onClick={() => setIsEditing(true)}
            className="border border-yellow-500 text-yellow-400 px-3 py-1 rounded text-xs hover:bg-yellow-500 hover:text-black cursor-pointer transition duration-300"
          >
            Edit
          </button>
          <button
            onClick={() => deleteTask(task.id)}
            className="border border-red-600 text-red-400 px-3 py-1 rounded text-xs hover:bg-red-600 hover:text-white cursor-pointer transition duration-300"
          >
            Delete
          </button>
        </div>
      </div>
    )}
    </div>
  );
}
