import ImageComponent from "@/components/ImageComponent"
import { PageContext } from "@/context/pageContext"
import { useContext } from "react"
import defaultImage from "@/assets/images/grid-image-element.png"    

export default function GridSkeleton() {
    const {gridImages} = useContext(PageContext)

    const gridRowClasses: {[key:string]: string} = {
        "2": "grid-cols-2",
        "3": "grid-cols-3",
        "4": "grid-cols-4",
    }
    return (
        <div className={` grid ${gridRowClasses[gridImages.itemsPerRow || 4]} lg:gap-2 gap-[1px] w-full lg:max-w-[1340px] mx-auto lg:mt-5`}>
          {
            new Array(16).fill({src: defaultImage, width: 331, height: 358}).map((item, index) => (
                <ImageComponent src={item.src} componentClass="col-span-1 w-full animate-[pulse_1s_cubic-bezier(0.4,_0,_0.6,_1)_infinite]" width={item.width} key={index} height={item.height} />
            ))
          }
        </div>
    )
}
