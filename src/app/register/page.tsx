import Pagina from '@/components/Pagina'
import SignUpForm from '@/components/register/SignUpForm'

function Register() {
  return (
     <Pagina className="flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold text-center text-white mb-4">
        Task<span className="text-purple-600">Flow</span>
      </h1>
       <SignUpForm /> 
    </Pagina>
  )
}

export default Register
