"use client"
import React from 'react'

type ButtonProps = React.ComponentProps<"button"> & {
  label: string
  isPending?: boolean
  loading?: string
}

function Button({label,isPending, ...props}: ButtonProps) {
  return (
    <button type="submit" {...props} disabled={isPending} 
    className={`mt-4 cursor-pointer bg-linear-to-r from-purple-600 to-violet-600 text-white font-semibold rounded-full py-2 px-4 shadow-lg 
    hover:from-purple-700 hover:to-violet-700 transition duration-300
    focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-zinc-900
    disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:from-purple-600 disabled:hover:to-violet-600
    ${props.className ? props.className : ""}
    `}
    >
      {isPending ? props.loading :label}  
    </button>
  )
}

export default Button
