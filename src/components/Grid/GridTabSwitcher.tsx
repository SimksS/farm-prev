import {useContext, useEffect, useState} from "react"
import { PageContext } from "@/context/pageContext"


export default function GridTabSwitcher() {
    const {gridImages,dispatch} = useContext(PageContext)
    const [count,setCount] = useState({
        coletaneas: gridImages.images?.filter(item => item.type === "coletaneas").length,
        imagens: gridImages.images?.filter(item => item.type === "imagens").length
    })

    useEffect(()=>{
        const UpdateCount = () => {
            setCount({
                coletaneas: gridImages.images?.filter(item => item.type === "coletaneas").length,
                imagens: gridImages.images?.filter(item => item.type === "imagens").length
            })
        }
        UpdateCount()
    },[gridImages.images?.length,gridImages.images])

    const HandleClick = (type: string) => {
        dispatch({type: "change_grid_type", gridType: type})
    }

    return(
        <div className="text-sm flex items-center gap-7 transition-all duration-300 ease-in-out">
            <button className={`${gridImages.gridType == "imagens" ? "border-b border-black" : ""} transition-all duration-300 ease-out`} onClick={()=> HandleClick("imagens")}>imagens <span className={`font-bold `}>({count.imagens})</span></button>
            <button className={`${gridImages.gridType == "coletaneas" ? "border-b border-black" : ""} transition-all duration-300 ease-out`} onClick={()=> HandleClick("coletaneas")}>coletâneas <span className={`font-bold `}>({count.coletaneas})</span></button>
        </div>
    )
}
