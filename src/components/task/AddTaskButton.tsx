"use client";

import React from "react";
import AddTaskModal from "./AddTaskModal";
import { IconPlus } from "@tabler/icons-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function AddTaskButton() {
  const [open, setOpen] = React.useState(false);

  useGSAP(()=>{
    gsap.set(".btn",{x:"100vw",autoAlpha:0})
    gsap.to(".btn",{x:0,ease:"bounce.inOut",autoAlpha:1,duration:2})
  },[])
    
  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="btn opacity-0 invisible flex justify-center items-center px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded shadow text-sm cursor-pointer transition durantion-300"
      >
        <IconPlus size={24} color="#fff" stroke={2} /> <span className="font-semibold">Add Task</span> 
      </button>

      {open && <AddTaskModal onClose={() => setOpen(false)} />} 
    </>
  );
}