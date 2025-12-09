
import {v4 as uuid} from "uuid"

type User = {
  id: string,
  username: string,   
  email: string,
  password: string 
}

export const authService = {
  register: async (username:string, email:string, password:string) =>{
      await new Promise<void>((resolve) => setTimeout(resolve,600))
      const raw = localStorage.getItem("users");
      const users: User[] = raw ? JSON.parse(raw) : []

      const existingUser = users.find((user) => user.email === email)
      if(existingUser) throw new Error("Email already exist");

      const newUser: User = {
        id: uuid(),
        username,
        email,
        password
      }

      users.push(newUser);
      localStorage.setItem("users",JSON.stringify(users));
      
      // create fake token
      const token = "mock.jwt." + newUser.id;
      localStorage.setItem("token",token)

      return newUser    
  },

  login: async (email:string,password:string) =>{
     await new Promise<void>((resolve) => setTimeout(resolve,600))
     const raw = localStorage.getItem("users");
     const users : User[] = raw ? JSON.parse(raw) : [];

     const existingUser = users.find(
      (user) => user.email === email && user.password === password
    )
     if(!existingUser) throw new Error("Invalid email or password");
     
     // fake token;
     const token = "mock.jwt." + existingUser.id;
     localStorage.setItem("token",token);

     return existingUser;
  },

  getCurrentUser: ()=>{
    const token = localStorage.getItem("token");
    if(!token) return null;

    const userId = token.replace("mock.jwt.","")

    const raw = localStorage.getItem("users");
    const users: User[] = raw ? JSON.parse(raw) : [];
    return users.find((user) => user.id === userId)|| null
  },

    logout: () => {
    localStorage.removeItem("token");
  },
}