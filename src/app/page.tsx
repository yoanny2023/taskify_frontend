"use client"

import LoginForm from "@/components/login/LoginForm";
import Pagina from "@/components/Pagina";

export default function Home() { 
  return (
    <Pagina className="flex flex-col justify-center items-center">
      <LoginForm />      
    </Pagina>
  );
}
