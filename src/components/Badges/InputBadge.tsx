interface IProps {
    badges: iBadge
    size: string
}

interface iBadge{
    name: string
    link?: string
}


export default function InputBadge({badges,size}:IProps) {

    const badge_sizes: {[key:string] : string} = {
        sm: "px-3 py-3 text-base rounded",
        lg: "px-5 lg:py-5 py-3 lg:text-4xl lg:h-[55px] rounded-[32px]"
    }

    return(
             badges &&
                    <li className={`badge  border-[#333333]   bg-[#333333] text-white whitespace-nowrap  ${badge_sizes[size]}`}  >{badges.name}</li>
                )
}