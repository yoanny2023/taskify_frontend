"use client"
import React from 'react'

type InputProps = React.ComponentProps<"input"> & {
  label?:string,
  error?:string,
  Icon?: any,
  setState?: React.Dispatch<React.SetStateAction<string>>
}

function Input({type,label,error,Icon,setState, ...props}: InputProps) {
 const[showPassword,setShowPassword] = React.useState(false);

 React.useEffect(()=>{
  console.log("show is:",showPassword)
 },[showPassword])

  function handleShowPassword(){
    console.log("cliquei")
    setShowPassword(!showPassword);
  }

  return (
    <div className="flex justify-center items-center gap-2 px-4 py-2 
      bg-zinc-900 text-white rounded-full border border-zinc-700 text-slate-100 placeholder:text-zinc-500
      focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/40 hover:border-purple-400 transition duration-300"> 
      <input type={showPassword ? "text" : type} name={props.name} id={props.name} {...props}
       className='flex-1 text-sm focus:outline-none bg-transparent' />
        {Icon && (
        <Icon className="cursor-pointer text-purple-400" stroke={1} size={18}
        onClick={handleShowPassword}          
      />)}
      {error && <p className='text-red-500'>{error}</p>}
    </div>
  )
}

export default Input
 
