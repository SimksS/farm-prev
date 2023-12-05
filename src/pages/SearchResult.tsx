import Header from "@/components/Header"
import { Grid } from "@/components/Grid"
import { useContext,useEffect} from "react"
import GridSkeleton from "@/components/Skeleton/GridSkeleton";
import { PageContext } from "@/context/pageContext";
import { useMobileOrientation } from "react-device-detect";

  

    
    export default function SearchResult() {
        const { isLandscape } = useMobileOrientation()

    const {gridImages,loading,GetSearchImages,setIsLoading} = useContext(PageContext)
        useEffect(()=>{
            const getInfo = async () => {
                if(gridImages.images?.length == 0){
                    setIsLoading(!loading)
                    await GetSearchImages()
                    
                }
            }
            getInfo()
        },[gridImages.images?.length])
       
        
      
    return (
        <section className="bg-white min-h-screen relative pb-[65px] lg:pb-0">
        <Header/>
        <main className="lg:px-10 min-h-full flex flex-col justify-between">
            {
                loading? <GridSkeleton/> : <Grid.Images type={gridImages.gridType || "imagens"} /> 
            }
            {
                !isLandscape &&
                <section className="py-3 pb-8 w-full flex justify-center items-center fixed h-fit bottom-0 bg-white">
                          <Grid.TabSwitcher />
                </section>
            }
        </main>
        </section>
    )
    }
