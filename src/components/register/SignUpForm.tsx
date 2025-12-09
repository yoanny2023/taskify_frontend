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

  return (
    <form action={formAction} className="bg-slate-900/60 backdrop-blur-xl flex flex-col gap-3 border border-slate-800 px-4 py-2 rounded-md">
      <Image src="/images/logo.svg" width={120} height={120} alt='logo' priority className='mx-auto hidden sm:block' />
      <Input label='Username' name='username' placeholder='username' />
      {formState.fieldErrors?.username?.map(err => (
      <ErroField key={err} err={err} />  
      ) )}
      <Input label='Email' name='email' placeholder='email' />
      {formState.fieldErrors?.email?.map(err => (  
      <ErroField key={err} err={err} />  
      ) )}
      <Input type='password' label="Password" name="password" placeholder="password" />
       {formState.fieldErrors?.password?.map(err => (
      <ErroField key={err} err={err} /> 
      ) )}
      <ErrorMessage error={formState.error} />
      <Button label='Register' className='w-full' isPending={isPending} />
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
  )
}

export default SignUpForm