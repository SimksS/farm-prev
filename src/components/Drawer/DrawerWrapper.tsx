import { ReactNode } from "react";
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'

interface IProps{
    children: ReactNode
    isOpen: boolean
    position: "left" | "right"
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export default function DrawerWrapper({children,isOpen=false,position, setIsOpen}:IProps) {
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }
    
    return(
        <Drawer
                open={isOpen}
                direction={position}
                onClose={toggleDrawer}
                size={375}
                className='drawer-wrapper'
            >
                <section className="w-full h-full flex flex-col justify-start px-14 items-start pt-20 pb-12 gap-20">
                    <button onClick={()=>toggleDrawer()} className="">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="27" viewBox="0 0 25 27" fill="none">
                            <path d="M23.9043 24.5435L1.83908 2.47824" stroke="black" strokeWidth="2.64783" strokeLinecap="round"/>
                            <path d="M23.9043 2.47827L1.83908 24.5435" stroke="black" strokeWidth="2.64783" strokeLinecap="round"/>
                        </svg>
                    </button>
                    {children}
                </section>
            </Drawer>
   
    )
}
