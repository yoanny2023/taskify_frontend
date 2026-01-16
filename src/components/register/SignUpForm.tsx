"use client"

import React, { useActionState } from 'react'
import Link from 'next/link'
import Button from '../form/Button'
import Input from '../form/Input'
import Image from 'next/image'
import registerForm from '@/actions/register'
import ErroField from '../help/ErroField'
import ErrorMessage from '../help/ErrorMessage'
import { toast } from 'react-toastify'
import { useAuth } from '@/context/authContext'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { IconLock, IconMail, IconUser } from '@tabler/icons-react'

function SignUpForm() {
  const{register} = useAuth()

  const[formState,formAction,isPending] = useActionState(registerForm,{
    ok:false,
    data: null,
    error: "",
    fieldErrors:null
  })

    React.useEffect(() => { 
      if(formState.ok && formState.data) {
        register(formState.data?.username,formState.data?.email,formState.data?.password)
        return;
     } 
       if (!formState.ok && formState.error && !formState.fieldErrors) {
      toast.error(formState.error); 
    }
    },[formState]);

     const tl = gsap.timeline()
    
      useGSAP(()=>{
      tl.to("#title",{ease:"power3.inOut",opacity:1,y:0,duration:2})
      tl.from(".gsap_form",{x:"-100vw",opacity:0,ease:"back.inOut",duration:2.5},">-1")
    },[]);

  return (
    <>
      <h1 id='title' className="opacity-0 text-3xl font-bold text-center text-white mb-4">
        Task<span className="text-purple-600">Flow</span>
      </h1>
      <form action={formAction} className="gsap_form bg-slate-900/60 backdrop-blur-xl flex flex-col gap-3 border border-slate-800 px-10 py-6 rounded-2xl">
        <Image src="/images/logo.svg" width={120} height={120} alt='logo' priority className='mx-auto hidden sm:block' />
        <Input name='username' placeholder='Username' Icon={IconUser} />
        {formState.fieldErrors?.username?.map(err => (
        <ErroField key={err} err={err} />  
        ))}
        <Input name='email' placeholder='Email' Icon={IconMail} />
        {formState.fieldErrors?.email?.map(err => (  
        <ErroField key={err} err={err} />  
        ) )}
        <Input type='password' name="password" placeholder="Password" Icon={IconLock} />
        {formState.fieldErrors?.password?.map(err => (
        <ErroField key={err} err={err} /> 
        ) )}
        <ErrorMessage error={formState.error} />
        <Button label='Register' className='w-full' loading="Submitting..." isPending={isPending} />
        <p className="text-center text-slate-500 text-sm mt-4">  
              Already have an account?{" "}
              <Link  
                href="/"
                className="text-purple-500 hover:underline font-medium"
              >
                Login
              </Link>
          </p>
      </form>
    </>
  )
}

export default SignUpForm