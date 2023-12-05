import { Link } from "react-router-dom";
interface IProps {
    src: string
    width: number
    height: number
    componentClass?: string
    link?: ILink
}

interface ILink {
    href: string
    target: string
}

const ImageComponent = ({src,width,height,componentClass = "", link}: IProps) => {

    return (
        link 
        ?
        <Link className="w-fit" to={link.href} target={link.target || "_self"}>
            <img  width={width} height={height} className={`w-auto  h-auto ${componentClass}`} src={src}/>
        </Link> 
        : <img  width={width} height={height} className={`w-auto  h-auto ${componentClass}`} src={src}/>

    )
}
export default ImageComponent