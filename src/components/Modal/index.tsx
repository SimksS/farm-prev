import ImageComponent from "@/components/ImageComponent";

interface IProps {
  item: IItem;
  onClose: () => void;
}

interface IItem {
  src: string;
  width: number;
  height: number;
  informations?: IInfo;
}
interface IInfo {
  title: string;
  description: string;
  tags: { name: string; link: string }[];
}

export default function Modal({ item, onClose }: IProps) {
  return (
    <div className=" z-30 fixed top-0 right-0 w-screen h-screen flex items-center justify-center ">
      <div onClick={onClose} className=" w-screen h-screen bg-gray-900 bg-opacity-50 absolute"></div>
      <div className="relative flex flex-col h-fit w-full max-w-[750px] max-h-[650px] z-10 bg-white py-4 lg:py-0">
        <div className=" absolute flex  top-4 right-4 justify-end items-end z-20 px-3 py-2">
          <button onClick={onClose} className="text-white font-bold ">
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" className="lg:stroke-black stroke-white" viewBox="0 0 15 15" fill="none">
                <g opacity="0.35">
                <path d="M13.5 13.5L0.999999 0.999998" stroke="inherit" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M13.5 1L0.999999 13.5" stroke="inherit" strokeWidth="1.5" strokeLinecap="round"/>
                </g>
            </svg>
          </button>
        </div>
        <div className="grid gap grid-cols-1 lg:grid-cols-2 w-full items-center">
          <div className="col-span-1">
            <ImageComponent
              src={item.src}
              width={item.width}
              height={item.height}
              componentClass="lg:w-auto lg:h-full "
            />
          </div>
          <div className="col-span-1  flex flex-col w-full justify-center items-center gap-16 lg:px-12 ">
            <div className="flex flex-col items-start justify-start gap-[10px] w-full">
              <h2 className="capitalize font-bold text-[#333333] lg:text-xl skeleton  animate-[pulse_2s_cubic-bezier(0.4,_0,_0.6,_1)_infinite]">{item.informations?.title}</h2>
                <ul className="flex items-center gap-1">
                    {
                        item.informations?.tags?.map((item,index) => <li className="text-[10px] badge h-3 rounded border-[#333333] skeleton animate-[pulse_2s_cubic-bezier(0.4,_0,_0.6,_1)_infinite] text-[#333333]" key={index}>{item.name}</li>)
                    }
                </ul>
               <p className="overflow-hidden  h-full lg:mt-7 custom-scrollbar text-xs text-justify animate-[pulse_2s_cubic-bezier(0.4,_0,_0.6,_1)_infinite]">{item.informations?.description}</p> 
                    {/* <span className="skeleton w-full h-2 mt-7 rounded bg-[#C6C6C6]"></span>
                    <span className="skeleton w-full h-2 rounded bg-[#C6C6C6]"></span>
                    <span className="skeleton w-full h-2 rounded bg-[#C6C6C6]"></span>
                    <span className="skeleton w-full h-2 rounded bg-[#C6C6C6]"></span>
                    <span className="skeleton w-full h-2 rounded bg-[#C6C6C6]"></span>
                    <span className="skeleton w-full h-2 rounded bg-[#C6C6C6]"></span>
                    <span className="skeleton w-full h-2 rounded bg-[#C6C6C6]"></span>
                    <span className="skeleton w-full h-2 rounded bg-[#C6C6C6]"></span>
                    <span className="skeleton w-full h-2 rounded bg-[#C6C6C6]"></span>
                    <span className="skeleton w-full h-2 rounded bg-[#C6C6C6]"></span>
                    <span className="skeleton w-full h-2 rounded bg-[#C6C6C6]"></span>
                    <span className="skeleton w-full h-2 rounded bg-[#C6C6C6]"></span> */}
            </div>
            <div className="w-full flex items-center justify-start gap-2">
              <button className="bg-[#C6C6C6] bg-opacity-60 rounded-[37px] px-3 py-1 w-fit text-[#333333] animate-[pulse_2s_cubic-bezier(0.4,_0,_0.6,_1)_infinite] skeleton">Lorem Ipsum sit amet</button>
              <button className="bg-[#C6C6C6] rounded-full px-3 py-1 text-[#333333] animate-[pulse_2s_cubic-bezier(0.4,_0,_0.6,_1)_infinite] skeleton">T </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
