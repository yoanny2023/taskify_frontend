import React from "react"
import type { Metadata, Viewport } from "next";
import "./globals.css";
import {poppins } from "@/fonts/fonts";
import {TaskContextProvider } from "@/context/taskContext";
import {AuthContextProvider} from "@/context/authContext";
import "react-toastify/dist/ReactToastify.css";
import {ToastContainer} from "react-toastify"


export const metadata: Metadata = {
  title: "Taskify",
  description: "Task manager app.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" className="antialiased h-full">
        <body className={`${poppins.className} min-h-[100dvh] overflow-x-hidden`}>
          <AuthContextProvider>
          <TaskContextProvider> 
            {children}   
          <ToastContainer
              position="top-right"
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="dark"
            />
          </TaskContextProvider>
          </AuthContextProvider>
        </body>
    </ html>
  );
}

