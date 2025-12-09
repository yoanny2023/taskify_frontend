"use server"

import {z} from "zod"
import apiError from "@/functions/apiError"

export type LoginFormState = {
  ok: boolean
  data: { email: string; password: string } | null
  error: string
  fieldErrors: {
    email?: string[]
    password?: string[]
  } | null
}

const loginSchema = z.object({
  email: z.string().email({message: "invalid email"}).trim(),
  password: z.string().min(6,{message:"password must be at least 6 characters"}).trim()
})

export default async function loginAction(state: LoginFormState,formData: FormData){

 const email = formData.get("email") as string | null
 const password = formData.get("password") as string | null
 
 try {
   if(!email || !password){
     return {
        ok: false,
        data: null,
        error: "Please fill the form",
        fieldErrors: null
      }
   }
    const result = loginSchema.safeParse(Object.fromEntries(formData))

    if(!result.success){
      return {
        ok: false,
        data: null,
        error: "Invalid fields",
        fieldErrors: result.error.flatten().fieldErrors
      }
    }  

   return {
    data:{email: result.data.email, password: result.data.password},  
    ok:true,
    error:"",
    fieldErrors: null
  }
 } catch (error:unknown) {
   return apiError(error) 
 }
}