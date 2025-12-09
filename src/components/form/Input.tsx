"use client"
import React from 'react'
import clsx from "clsx"

type InputProps = React.ComponentProps<"input"> & {
  label:string,
  error?:string,
  setState?: React.Dispatch<React.SetStateAction<string>>
}

function Input({label,error,setState, ...props}: InputProps) {

  return (
    <div className='flex items-center gap-3'>
      <label className='min-w-[70px] text-sm font-medium text-purple-400' htmlFor={props.name}>{label}</label>
      <input type="text" name={props.name} id={props.name} {...props}
        className={clsx("w-full px-4 py-2 bg-zinc-900 text-white rounded-full border border-zinc-700 text-slate-100 placeholder:text-zinc-500",
          "focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/40 hover:border-purple-400 transition duration-300")}
       />
      {error && <p className='text-red-500'>{error}</p>}
    </div>
  )
}

export default Input
 
