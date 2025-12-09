"use client";

import React from "react";
import AddTaskModal from "./AddTaskModal";
import { IconPlus } from "@tabler/icons-react";

export default function AddTaskButton() {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="flex justify-center items-center px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded shadow text-sm cursor-pointer transition durantion-300"
      >
        <IconPlus size={24} color="#fff" stroke={2} /> <span className="font-semibold">Add Task</span> 
      </button>

      {open && <AddTaskModal onClose={() => setOpen(false)} />} 
    </>
  );
}