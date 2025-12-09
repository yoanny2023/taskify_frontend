"use client"
function ErroField({err}:{err:string}) {
  return (
   <p className="text-center text-red-500 text-sm">{err}</p>
  )
}

export default ErroField
