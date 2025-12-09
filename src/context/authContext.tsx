"use client"
import Pagina from "@/components/Pagina"
import { authService } from "@/services/auth"
import { useRouter } from "next/navigation"
import React from "react"
import { toast } from "react-toastify"

type User = {id:string, username: string, email: string, password:string} | null

type contextProps = {
  user: User,
  isAuthenticated: boolean;
  register : (username:string, email: string,password: string) => Promise<string | void>
  login: (email: string,password: string) => Promise<string | void>,
  logout: () => void
}

const AuthContext = React.createContext<contextProps>(
  {
  user: null,
  isAuthenticated: false,
  login: async () => {},
  register: async () => {},
  logout: () => {}
  }
)

export function useAuth(){
  const context = React.useContext(AuthContext)
  if(!context) throw new Error("useAuth needs to be inside AuthContextProvider")
  
  return context;
}

export function AuthContextProvider({children}: {children: React.ReactNode}){
  const[user,setUser] = React.useState<User>(null);
  const[loading,setLoading] = React.useState(true)
  const router = useRouter();

  React.useEffect(()=>{
   const currenUser = authService.getCurrentUser(); //fetch user from backend
   setUser(currenUser)
    setLoading(false)
  },[]);

  async function login(email:string,password:string): Promise<string | void> {
    try {
      const user = await authService.login(email,password)
      setUser(user);
      toast.success("Logged in successfully 🚀",{
      className: "bg-zinc-950 text-white border border-violet-500 rounded-lg shadow-lg"
});
    router.push("/tasks")

    }catch (error) {
      toast.error(error instanceof Error ? error.message : "Login failed")  
      return error instanceof Error ? error.message : "Login failed"
  }    
}

async function register(username: string,email: string,password: string){
  try {
   const user = await authService.register(username,email,password)
   setUser(user);
   toast.success("Registered successfully 👋",{className:"bg-zinc-950 text-white border border-violet-500 rounded-lg shadow-lg"});
   router.push("/tasks")
  } catch (error) {
    toast.error(error instanceof Error ? error.message : "Registration failed")
     return error instanceof Error ? error.message : "Registration failed"
  }
}

  function logout(){
    window.localStorage.removeItem("token")
    toast.success("Logged out 👋",{className:"bg-zinc-950 text-white border border-violet-500 rounded-lg shadow-lg"});
    setUser(null);
    router.push("/")
  }

    const isAuthenticated = !!user;

  if (loading) {
    return (
    <Pagina className="flex flex-col justify-center items-center" >
      <div className="h-8 w-8 animate-spin rounded-full border-4 border-violet-600 border-t-transparent" />
    </Pagina>
  );
  }

  return (
    <AuthContext.Provider value={{user,register,login,isAuthenticated,logout}} >
      {children} 
    </AuthContext.Provider>
  )
}