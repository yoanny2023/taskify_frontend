"use client"

import React from "react"
import {mockTasks} from "@/data/tasks"
import { v4 as uuid } from "uuid";

export type TaskStatus = "todo" | "in-progress" | "done";

 export type Task = {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
  createdAt: string;
};

type TaskContextProps = {
  tasks: Task[],
  addTask: (task: Omit<Task, "id" |"createdAt"> & {id?: string} ) => void,
  updateTaskStatus: (id: string, newStatus: TaskStatus) => void;
  updateTask: (id: string, update: Partial<Omit<Task, "id" | "createdAt">>) => void
  deleteTask: (id: string) => void;
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

const TaskContext = React.createContext<TaskContextProps | null>(null)

export function useTasks(){
 const context = React.useContext(TaskContext)
 if(!context) throw new Error("useTasks needs to be inside TaskContextProvider")
 return context
}

export function TaskContextProvider({children}: {children :React.ReactNode}){
  const[tasks,setTasks] = React.useState<Task[]>(() => {
  
      if(typeof window !== "undefined"){
        const raw = localStorage.getItem("tasks")
        if(raw) return JSON.parse(raw) as Task[];
      }  
      
    return mockTasks.map((t) => (
      {...t, 
        createdAt: new Date( t.createdAt ?? Date.now()).toISOString()} ))
  });

    React.useEffect(() => {
    try {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    } catch (e) {}
  }, [tasks]);

  function addTask(task: Omit<Task, "id" | "createdAt"> & { id?: string }){
    const newTask : Task = {
      id: task.id ?? uuid(),
      title: task.title,
      description: task.description,
      status: task.status,
      createdAt: new Date().toISOString()
    }
   setTasks((prev) => [...prev,newTask])
  }

  function updateTaskStatus(id: string, newStatus: TaskStatus){
    setTasks((prev) => ( prev.map((t) => (
      t.id === id ? {...t,status: newStatus} : t
    )
    )))
  }   

  function deleteTask(id: string){
    const confirm = window.confirm("Sure you want to delete?")
    if(confirm){
      setTasks((prev) => (
        prev.filter((t) => t.id !== id)
      ))
    }
  }

  function updateTask(id: string, update: Partial<Omit<Task, "id" | "createdAt">>){
    setTasks((prev) => ( prev.map((t) => (
      t.id === id ? {...t, ...update} : t
    )
  )))
  }

  return (
    <TaskContext.Provider value = {
      {tasks,addTask,updateTaskStatus,updateTask,deleteTask,setTasks}
      }>
      {children}
    </TaskContext.Provider>
  )
}