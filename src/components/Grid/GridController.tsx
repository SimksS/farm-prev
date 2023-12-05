import {ReactElement, useContext} from "react"
import { PageContext } from "@/context/pageContext"


const images: {[key: string]: ReactElement} = {
    grid2: 
        <svg className="fill-inherit" width="24" height="25" viewBox="0 0 24 25" fill="inherit" xmlns="http://www.w3.org/2000/svg">
            <g id="icon">
            <rect id="Rectangle Copy 3" y="14.832" width="10" height="10" fill="inherit"/>
            <rect id="Rectangle Copy 5" x="14" y="14.832" width="10" height="10" fill="inherit"/>
            <rect id="Rectangle Copy 4" y="0.832031" width="10" height="10" fill="inherit"/>
            <rect id="Rectangle Copy 6" x="14" y="0.832031" width="10" height="10" fill="inherit"/>
            </g>
        </svg>,
    grid3: 
        <svg className="fill-inherit"  width="24" height="25" viewBox="0 0 24 25" fill="inherit" xmlns="http://www.w3.org/2000/svg">
            <g id="grid3">
            <rect id="Rectangle 385" y="0.832031" width="6" height="6" fill="inherit"/>
            <rect id="Rectangle 386" x="9" y="0.832031" width="6" height="6" fill="inherit"/>
            <rect id="Rectangle 387" x="18" y="0.832031" width="6" height="6" fill="inherit"/>
            <rect id="Rectangle 392" x="18" y="9.83203" width="6" height="6" fill="inherit"/>
            <rect id="Rectangle 395" x="9" y="9.83203" width="6" height="6" fill="inherit"/>
            <rect id="Rectangle 398" y="9.83203" width="6" height="6" fill="inherit"/>
            <rect id="Rectangle 393" x="18" y="18.832" width="6" height="6" fill="inherit"/>
            <rect id="Rectangle 396" x="9" y="18.832" width="6" height="6" fill="inherit"/>
            <rect id="Rectangle 399" y="18.832" width="6" height="6" fill="inherit"/>
            </g>
        </svg>,
    grid4: 
        <svg className="fill-inherit" width="24" height="25" viewBox="0 0 24 25" fill="inherit" xmlns="http://www.w3.org/2000/svg">
            <g id="grid4">
            <rect id="Rectangle 385" y="0.832031" width="4.61538" height="4.61538" fill="inherit"/>
            <rect id="Rectangle 386" x="6.46191" y="0.832031" width="4.61538" height="4.61538" fill="inherit"/>
            <rect id="Rectangle 387" x="12.9229" y="0.832031" width="4.61538" height="4.61538" fill="inherit"/>
            <rect id="Rectangle 388" x="19.3848" y="0.832031" width="4.61538" height="4.61538" fill="inherit"/>
            <rect id="Rectangle 389" x="19.3848" y="7.29297" width="4.61538" height="4.61538" fill="inherit"/>
            <rect id="Rectangle 392" x="12.9229" y="7.29297" width="4.61538" height="4.61538" fill="inherit"/>
            <rect id="Rectangle 395" x="6.46191" y="7.29297" width="4.61538" height="4.61538" fill="inherit"/>
            <rect id="Rectangle 398" y="7.29297" width="4.61538" height="4.61538" fill="inherit"/>
            <rect id="Rectangle 390" x="19.3848" y="13.7559" width="4.61538" height="4.61538" fill="inherit"/>
            <rect id="Rectangle 393" x="12.9229" y="13.7559" width="4.61538" height="4.61538" fill="inherit"/>
            <rect id="Rectangle 396" x="6.46191" y="13.7559" width="4.61538" height="4.61538" fill="inherit"/>
            <rect id="Rectangle 399" y="13.7559" width="4.61538" height="4.61538" fill="inherit"/>
            <rect id="Rectangle 391" x="19.3848" y="20.2168" width="4.61538" height="4.61538" fill="inherit"/>
            <rect id="Rectangle 394" x="12.9229" y="20.2168" width="4.61538" height="4.61538" fill="inherit"/>
            <rect id="Rectangle 397" x="6.46191" y="20.2168" width="4.61538" height="4.61538" fill="inherit"/>
            <rect id="Rectangle 400" y="20.2168" width="4.61538" height="4.61538" fill="inherit"/>
            </g>
        </svg>
}


export function GridController(){
    const {gridImages,dispatch} = useContext(PageContext)

    const HandleClick = (value: string) => dispatch({type: "change_items_per_row", itemsPerRow: value})
    
   
    return(
        <div className="flex items-center gap-4">
            {
                 new Array(3).fill(0).map((_, index) => (
                    <button key={index} onClick={()=> HandleClick((index+2).toString()) } className={`btn btn-ghost px-0 ${(index + 2).toString() == gridImages.itemsPerRow ? "fill-black" : "fill-slate-400"}`}>
                            {images[`grid${index+2}`]}
                    </button>
                  ))
            }
        </div>
    )
}