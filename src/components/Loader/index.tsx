import ImageComponent from "@/components/ImageComponent"
import { PageContext } from "@/context/pageContext"
import defaultImage from "@/assets/images/grid-image-element.png"    
import { useContext,useEffect,useState } from "react"

interface IImages {
    src: string
    width: number
    height: number
 
}

export default function Loader() {
    
    const {gridImages} = useContext(PageContext)
    const [fillLoader,setFillLoader] = useState<number>(4)
    const [defaultImages, setDefaultImages] = useState<IImages[]>([])
    
    const gridRowClasses: {[key:string]: string} = {
        1: "grid-cols-1",
        2: "grid-cols-2",
        3: "grid-cols-3",
        4: "grid-cols-4",
    }

    const widthFromGrid: {[key:string]: string} = {
        1: "col-span-1",
        2: "col-span-2",
        3: "col-span-3",
        4: "col-span-4",
    }

    useEffect(()=>{
        const getFillWidth = () =>{
            let value = gridImages.images?.filter((item)=> item.type === gridImages.gridType)?.length || 4
            if(value % Number(gridImages.itemsPerRow) !== 0){
                const newValue = (Math.ceil(value/Number(gridImages.itemsPerRow))*Number(gridImages.itemsPerRow)) - value 
                value = newValue
            }
            const defaultImageArray = new Array(value > Number(gridImages.itemsPerRow) ? Number(gridImages.itemsPerRow) : value).fill({ src: defaultImage, width: 331, height: 358 })
            setFillLoader(value > Number(gridImages.itemsPerRow) ? Number(gridImages.itemsPerRow) : value)
            setDefaultImages(defaultImageArray)
        }
        getFillWidth()
    },[gridImages.gridType, gridImages.images, gridImages.images?.length, gridImages.itemsPerRow ])
   

    return (
        <div className={` ${widthFromGrid[fillLoader ||  Number(gridImages.itemsPerRow)]} grid ${gridRowClasses[fillLoader ||  Number(gridImages.itemsPerRow)]} lg:gap-2 gap-[1px] w-full`}>
          {
            defaultImages.map((item, index) => (
                <ImageComponent src={item.src} componentClass="col-span-1 w-full animate-[pulse_1s_cubic-bezier(0.4,_0,_0.6,_1)_infinite] " width={item.width} key={index} height={item.height} />
            ))
          }
        </div>
    )
}
