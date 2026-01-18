"use client"

import LoginForm from "@/components/login/LoginForm";
import Pagina from "@/components/Pagina";

export default function Home() { 
  return (
    <Pagina className="flex justify-center items-center">
      <div className="w-full max-w-sm sm:max-w-md px-3">
        <LoginForm /> 
      </div>
    </Pagina>
  );
}
