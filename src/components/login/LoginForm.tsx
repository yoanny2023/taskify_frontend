"use client"
import React, { useActionState } from 'react'
import Input from '../form/Input'
import Link from 'next/link'
import Button from '../form/Button'
import ErrorMessage from '../help/ErrorMessage'
import { useAuth } from '@/context/authContext'
import loginAction from '@/actions/login'
import ErroField from '../help/ErroField'
import { toast } from 'react-toastify'
import Image from 'next/image'

function LoginForm() {
  const{login} = useAuth();

  const[formState,formAction,isPending] = useActionState(loginAction,{
    data: null,
    ok:false,
    error:  "",
    fieldErrors: null
  })

  React.useEffect(() => { 
    if(formState.ok && formState.data) {
       login(formState.data.email,formState.data.password);
       return;
   } 
   
     if (!formState.ok && formState.error && !formState.fieldErrors) {
    toast.error(formState.error); 
  }
  },[formState])
   
  return (  
    <form action={formAction} className="bg-slate-900/60 backdrop-blur-xl flex flex-col gap-3 border border-slate-800 px-4 py-2 rounded-md">
      <Image src="/images/logo.svg" width={120} height={120} alt='logo' priority className='mx-auto' />
      <Input label='Email' name='email' placeholder='email' />
      {formState.fieldErrors?.email?.map(err => (
      <ErroField key={err} err={err} />  
      ) )}
      <Input type='password' label="Password" name="password" placeholder="password" />
       {formState.fieldErrors?.password?.map(err => (
      <ErroField key={err} err={err} /> 
      ) )}
      <ErrorMessage error={formState.error} />
      <Button label='Login' className='w-full' isPending={isPending}  />
      <p className="text-center text-slate-500 text-sm mt-6">
            Don’t have an account yet?{" "}
            <Link  
              href="/register"
              className="text-purple-500 hover:underline font-medium"
            >
              Sign up
            </Link>
        </p>
    </form>
  )
}

export default LoginForm
