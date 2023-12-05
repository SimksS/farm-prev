import logo from "@/logo.png"
import ImageComponent from "@/components/ImageComponent"
import InputComponent from "@/components/Input"
import MainSkeleton from "@/components/Skeleton"

export default function Home() {

    const inputOptions = {
        componentClass: "w-full lg:max-w-[1190px] max-w-[90%] rounded-[43px] overflow-hidden bg-[#EEEEEE] lg:px-10 lg:py-5 px-5 lg:pr-[83px] py-2 lg:text-4xl",
        iconWidth:31,
        iconHeight: 42
    }

   return(
        <main className="h-screen m-auto  relative overflow-y-hidden flex items-end">
            <section className="flex flex-col h-full justify-center items-center w-full gap-28 m-auto">
                <div className="mt-auto h-full w-full flex flex-col items-center lg:gap-12  gap-4 justify-center">
                    <ImageComponent width={469} height={130} componentClass="lg:max-w-[469px] max-w-[55%]" src={logo}/>
                    <InputComponent options={inputOptions} badgeSize="lg"/>
                </div>
                <MainSkeleton quantity={5}/> 
            </section>
        </main>
   )
}
