import DrawerWrapper from "@/components/Drawer/DrawerWrapper"
import MenuContent from "@/components/Drawer/MenuContent"
import ProfileContent from "@/components/Drawer/ProfileContent"
import { ReactNode, useState } from "react"

interface IProps{
    children: ReactNode
    position: "left" | "right"
    type: "profile" | "menu"
}

export default function DrawerTrigger({children,position,type}:IProps) {
    const [isOpen,setIsOpen] = useState(false)

    const drawerType = {
        profile: <ProfileContent/>,
        menu: <MenuContent/>
    }


    const HandleClick = () =>  setIsOpen(!isOpen)
    
    return(
        <div className="w-fit">
            <button className="w-max" onClick={()=> HandleClick() }>
                {children}
            </button>
            <DrawerWrapper isOpen={isOpen} setIsOpen={setIsOpen} position={position}>
                {drawerType[type]}
            </DrawerWrapper>
        </div>
    )
}
