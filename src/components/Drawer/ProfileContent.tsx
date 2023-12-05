import Avatar from "@/components/Avatar";
import defaultImage from "@/assets/images/profile_default_image.png"
import { Link } from "react-router-dom";

export default function ProfileContent() {
   
    const defaultImageProps = {
        src: defaultImage,
        width: 78,
        height: 78
      }
    
    return(
        <section className="flex flex-col justify-between items-end flex-grow h-full w-full">
            <div className="flex flex-col w-full items-end justify-end gap-5 ">
                <Avatar images={[defaultImageProps]}/>
                <nav className="flex flex-col items-end justify-end">
                    <Link className="text-[27px] leading-tight" to={"#"}>Meu Perfil</Link>
                    <Link className="text-[27px] leading-tight" to={"#"}>Favoritos</Link>
                    <Link className="text-[27px] leading-tight" to={"#"}>Coletâneas</Link>
                </nav>
            </div>
             <nav className="flex flex-col items-end justify-end">
                    <Link className="text-lg" to={"#"}>Sair da conta</Link>
                    <Link className="text-lg" to={"#"}>Favoritos</Link>
                    <Link className="text-lg" to={"#"}>editar dados</Link>
                </nav>
        </section>
    )
}
