

interface IProps {
    image?: IImages
}

interface IImages{
    src: string
    width: number
    height: number
}

export default function NotificationAvatar({image}:IProps) {
    
    return(
        <div className="flex items-center gap-2">
            {
                image &&
                        <div  className="relative">
                            <div className="w-8 rounded-full flex items-center justify-center">
                                <svg style={{transform: "rotateY(180deg)"}} width="25" height="21" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2.61139 15C-2.14173 5.73325 4.52777 0.42736 10.8476 1.04921M10.8476 1.04921C16.1291 1.56887 18.4549 5.2127 17.9268 8.85653C17.404 12.4635 14.7205 14.5834 14.5445 14.0628C15.2862 9.37708 10.3197 9.37708 10.3197 9.37708M10.8476 1.04921C9.79144 3.65161 10.3197 9.37708 10.3197 9.37708M10.3197 9.37708C10.005 14.0628 5.47437 15 5.47437 15C4.72377 15 12.1562 14.4615 13.2551 10.7892M7.83742 6.61818C7.83742 7.33691 7.2463 7.91955 6.51712 7.91955C5.78794 7.91955 5.19682 7.33691 5.19682 6.61818C5.19682 5.89946 5.78794 5.31681 6.51712 5.31681C7.2463 5.31681 7.83742 5.89946 7.83742 6.61818ZM5.78003 6.25376H6.83627V7.29486H5.78003V6.25376Z" stroke="#333333" strokeLinecap="round">
                                    </path></svg>
                            </div>
                            <span className="indicator-item  bg-black text-white rounded-full -bottom-2 -right-2 py-[0.5px] px-1.5 overflow-hidden text-xs font-bold  absolute">1</span> 
                        </div>
            }
        </div>
    )
}