
export default function ErrorMessage({error}:{error:string}){
  if(error === '') return null;
  return(
    <p className="text-red-500 text-center" >{error}</p>
  )
}