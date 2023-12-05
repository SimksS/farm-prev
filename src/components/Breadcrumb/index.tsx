import { Link } from "react-router-dom";

interface IProps{
    route: string
}

export default function BreadCrumb({route}:IProps) {
    
    return(
        <div>
            <ul className="flex items-center gap-2 text-xs">
                <li><Link className="text-black" to={"/"}>home</Link></li>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15" fill="none">
                    <path d="M5.25281 4.33154L8.75281 7.83154L5.25281 11.3315" stroke="black" strokeOpacity="0.35" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <li className="text-[#00000059]">{route}</li>
            </ul>
            
        </div>
    )
}
