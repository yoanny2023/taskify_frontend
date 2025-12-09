"use client"

import LoginForm from "@/components/login/LoginForm";
import { Metadata } from "next";
import Pagina from "@/components/Pagina";

 /* export const metadata: Metadata = {
  title:"Home | Login",
  description:" This is the login,landing page"
} */

export default function Home() { 
  return (
    <Pagina className="flex flex-col justify-center items-center">
      <LoginForm />   
    </Pagina>
  );
}
