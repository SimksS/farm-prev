import { Link } from "react-router-dom";
interface IProps {
    badges: iBadge[]
}

interface iBadge{
    name: string
    link: string
}


export default function Navigation({badges}:IProps) {
    return(
        <ul className="flex items-center lg:gap-2 gap-1">
            {
                badges.map((item,index)=>
                    <li key={index} >
                        <Link className="badge rounded border-[#333333] text-[#333333] px-3 py-2" to={item.link}>{item.name}</Link>
                    </li>
                )
            }
        </ul>
    )
}
