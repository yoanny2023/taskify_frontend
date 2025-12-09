"use client"
import { useAuth } from '@/context/authContext'
import { useRouter } from 'next/navigation';
import React from 'react'

function Protected({children}: {children: React.ReactNode}) {
  const{isAuthenticated} = useAuth();
  const router = useRouter();

  React.useEffect(()=>{
   if(!isAuthenticated){
    router.push("/")
   }
  },[isAuthenticated])

  if(!isAuthenticated) return null

  return (
    <>{children}</>
  )
}

export default Protected
