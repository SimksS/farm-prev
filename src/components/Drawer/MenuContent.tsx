import { Link } from "react-router-dom";

export default function MenuContent() {
    return(
        <section className="flex flex-col justify-between items-start flex-grow  h-full w-full">
            <nav className="flex flex-col items-start justify-start">
                <Link className="text-[27px] leading-tight" to={"#"}>criatividade</Link>
                <Link className="text-[27px] leading-tight" to={"#"}>natureza</Link>
                <Link className="text-[27px] leading-tight" to={"#"}>feminino</Link>
                <Link className="text-[27px] leading-tight" to={"#"}>borogodó</Link>
                <Link className="text-[27px] leading-tight" to={"#"}>cultura</Link>
            </nav>
            <nav className="flex flex-col items-start justify-start">
                <Link className="text-lg leading-tight" to={"#"}>Estampas</Link>
                <Link className="text-lg leading-tight" to={"#"}>Dúvidas</Link>
                <Link className="text-lg leading-tight" to={"#"}>sobre a FARM</Link>
                <Link className="text-lg leading-tight" to={"#"}>Conheça o guia</Link>
            </nav>
            <nav className="flex flex-col items-start justify-start ">
                <Link className="text-lg leading-tight" to={"#"}>Sair da conta</Link>
            </nav>
        </section>
    )
}
