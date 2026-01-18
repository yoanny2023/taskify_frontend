"use client"

import LoginForm from "@/components/login/LoginForm";
import Pagina from "@/components/Pagina";

export default function Home() { 
  return (
    <Pagina className="flex justify-center items-center">
      <div className="w-full max-w-xs sm:max-w-md px-2 sm:px-3">
        <LoginForm /> 
      </div>
    </Pagina>
  );
}
