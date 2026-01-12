import React from 'react'

type PaginaProps = {
children: React.ReactNode,
className?: string
}

function Pagina({children,className}: PaginaProps ) {
  return (
    <div className={ `bg-linear-to-br from-slate-950 via-slate-900 to-slate-950 min-h-screen px-2
      overflow-x-hidden
     ${className ? className : ''}`}>
      {children}
    </div>
  )
}  

export default Pagina
