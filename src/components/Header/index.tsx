
import HeaderDesktop from "@/components/Header/desktop";
import HeaderMobile from "@/components/Header/mobile";
import { useMobileOrientation } from "react-device-detect";

export default function Header() {

  const { isLandscape } = useMobileOrientation()

 
  return (
    <header className="w-full pt-4 pb-2 lg:px-10 bg-white flex items-center justify-center   sticky top-0 h-fit z-10">
      {
        isLandscape ?
        <HeaderDesktop/>
        : <HeaderMobile/> 
      }
    </header>
  );
}
