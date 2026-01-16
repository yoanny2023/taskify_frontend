"use server"
import apiError from "@/functions/apiError"
import {z} from "zod"

export type RegisterFormState = {
  ok: boolean
  data: { username: string, email: string; password: string } | null
  error: string
  fieldErrors: {
    username?: string[]
    email?: string[]
    password?: string[]
  } | null
}

const registerSchema = z.object({
  username: z.string().min(2,{message: "username must have at least 2 characters."}).trim(),
  email: z.string().email({message: "invalid email"}).trim(),
  password: z.string().min(6,{message: "password must have at least 6 characters."}).trim()
})

export default async function registerForm(state:RegisterFormState,formData: FormData) {
 const username = formData.get("username") as string | null
 const email = formData.get("email") as string | null
 const password = formData.get("password") as string | null

 try {
   if(!username || !email || !password){
    return {
      ok: false,
      data: null,
      error: "Please fill the form",
      fieldErrors: null
    }
 }
   
 const result = registerSchema.safeParse(Object.fromEntries(formData))

 if(!result.success){
  return {
    ok: false,
    data: null,
    error:"Invalid fields",
    fieldErrors: result.error.flatten().fieldErrors
  }
 }

 return {
  data:{username: result.data.username, email: result.data.email, password: result.data.password},
  ok: true,
  error:"",
  fieldErrors: null
 }
  
 } catch (error: unknown) {
  return apiError(error)
 }
}