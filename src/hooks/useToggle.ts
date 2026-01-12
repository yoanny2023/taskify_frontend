import {useState } from "react";

export default function useToggle(value?:boolean){
  const[active,setActive] = useState(value ?? false);

  function toggleMenu(){
    setActive((active)=> !active)
  }

   const r: [boolean,() => void] = [active,toggleMenu];
   return r;
}