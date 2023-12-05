import NotificationAvatar from "@/components/Avatar/NotificationAvatar"
import ImageComponent from "@/components/ImageComponent"

interface IProps {
    images?: IImages[]
    showIndicator?: boolean
}

interface IImages{
    src: string
    width: number
    height: number
}

export default function Avatar({images, showIndicator}:IProps) {
    return(
        <div className="flex items-center gap-2">
            {
                images?.map((item,index)=>

                        !showIndicator ?
                        <div key={index} className="avatar">
                            <div style={{maxWidth: item.width}} className="w-auto rounded-full">
                                <ImageComponent componentClass="avatar" src={item.src} width={item.width} height={item.height} />
                            </div>
                        </div> :
                        <NotificationAvatar image={item} key={index} />
                )
            }
        </div>
    )
}
