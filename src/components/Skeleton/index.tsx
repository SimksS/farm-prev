import { useMobileOrientation} from 'react-device-detect';

interface iProps{
  quantity: number

}


const MainSkeleton = ({
 quantity = 4

}:iProps) => {
  const { isLandscape } = useMobileOrientation()
    return (
      isLandscape &&
        <div style={{display: "grid", gridTemplateColumns:`repeat(${quantity}, auto)`}} className={`  items-end gap-5 w-full lg:max-w-[1320px] mx-auto  absolute bottom-0`}>
          {
            new Array(quantity).fill(0).map((_, index) => (
              <span key={index} className="col-span-1 lg:w-[236px]  block h-[clamp(50px,7.5vw,500px)] even:h-[clamp(25px,5vw,400px)] bg-gray-200 animate-[pulse_1s_cubic-bezier(0.4,_0,_0.6,_1)_infinite] rounded-tl-[32px] rounded-tr-[32px]"></span>
            ))
          }
        </div>
    )
}


export default MainSkeleton