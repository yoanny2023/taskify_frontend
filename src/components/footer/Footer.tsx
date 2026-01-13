import { useGSAP } from "@gsap/react"
import { IconBrandInstagram,IconBrandLinkedin } from "@tabler/icons-react"
import gsap from "gsap";

function Footer() {
  useGSAP(()=>{
    const tl = gsap.timeline();
    tl.from(".footer > *",{y:70,opacity:0,duration:2,ease:"power1.out",clearProps: "all"})
  },
   {
      dependencies: [],
      revertOnUpdate: false,
    }
  );

  return ( 
   <footer className={`footer mt-auto flex items-center gap-3`}>
            <span className={`mr-auto text-xs text-zinc-500`}>
                Reserved&copy;_Yv{new Date().getFullYear()}
            </span>
            <a href="https://www.linkedin.com/in/yoanny-vasco-358399132/" target="_blank">
              <IconBrandLinkedin className='w-8 h-8 p-1 rounded-full 
                hover:shadow-[0_0_15px_rgba(168,85,247,0.9)] transition-all duration-300' 
              size={20} stroke={1}
            />
            </a>
            <a href="https://www.instagram.com/yoanny_vaal/" target="_blank">
              <IconBrandInstagram className='w-8 h-8 p-1 rounded-full 
                hover:shadow-[0_0_12px_rgba(168,85,247,0.6)] transition-all duration-300' 
              size={20}  stroke={1} 
            />
            </a>
      </footer>
  )
}

export default Footer
