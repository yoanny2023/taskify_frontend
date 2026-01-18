import Pagina from '@/components/Pagina'
import SignUpForm from '@/components/register/SignUpForm'

function Register() {
  return (
     <Pagina className="flex justify-center items-center">
      <div className="w-full max-w-xs sm:max-w-md px-2 sm:px-3">
        <SignUpForm /> 
      </div>
    </Pagina>
  )
}

export default Register
