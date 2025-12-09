"use client"

import React from "react"
import LoginForm from "@/components/login/LoginForm";
import { useAuth } from "@/context/authContext";
import { Metadata } from "next";
import { useRouter } from "next/navigation";
import Pagina from "@/components/Pagina";

/* export const metadata: Metadata = {
  title:"Home | Login",
  description:" This is the login,landing page"
} */

export default function Home() {  
 /*  const{isAuthenticated} = useAuth();
  const router = useRouter();

  React.useEffect(()=>{
    router.push("/tasks")
  },[isAuthenticated]) */

  return (
    <Pagina className="flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold text-center text-white mb-8">
        Task<span className="text-purple-600">Flow</span>
      </h1>
      <LoginForm />   
    </Pagina>
  );
}
