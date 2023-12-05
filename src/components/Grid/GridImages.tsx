import { useContext, useEffect, useState } from "react";
import { PageContext } from "@/context/pageContext";
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "@/components/Loader";
import { useMobileOrientation } from "react-device-detect";
import Modal from "@/components/Modal";

interface IProps {
  type: string;
}

interface IImage{
    src: string
    width: number
    height: number
    info?:IInfo
}
    interface IInfo{
    title: string
    description: string;
    tags:{ name: string, link: string}[]
    }

export function GridImages({ type }: IProps) {
  const { gridImages, GetSearchImages } = useContext(PageContext);
  const { isLandscape } = useMobileOrientation();
  const [hasMore, setHasMore] = useState(true);
  const [selectedImage, setSelectedImage] = useState<null | IImage>(null);

  const gridRowClasses: { [key: string]: string } = {
    "2": "grid-cols-2",
    "3": "grid-cols-3",
    "4": "grid-cols-4",
  };
  const fetchData = async () => {
    const data = await GetSearchImages();
    if (!data) {
      setHasMore(false);
      return;
    }
    window.scrollBy(0, -100);
  };

  const openModal = (item:IImage) => {
    console.log(item)
    setSelectedImage(item);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };


  useEffect(() => {
    const updateImagesQuantity = () => {
      const filteredArray =
        gridImages?.images?.filter((item) => item.type == gridImages.gridType)
          ?.length || 0;
      if (!isLandscape && filteredArray <= 8 && filteredArray > 0) {
        fetchData();
      } else if (
        isLandscape &&
        (gridImages?.images?.length || 0) > 0 &&
        (gridImages?.images?.length || 0) <= 4
      ) {
        fetchData();
      }
    };
    updateImagesQuantity();
  }, [gridImages.images?.length, gridImages.gridType]);

  return (
    <>
      <InfiniteScroll
        dataLength={
          gridImages?.images?.filter((item) => item.type == gridImages.gridType)
            ?.length || 0
        }
        next={fetchData}
        className={` grid ${
          gridRowClasses[gridImages.itemsPerRow || 4]
        } lg:gap-2 gap-[1px]  w-full lg:max-w-[1340px] mx-auto lg:mt-5`}
        hasMore={hasMore}
        loader={<Loader />}
      >
        {gridImages?.images?.map(
          (item, index) =>
            item.type == type && (
              <img
                src={item.src}
                className="col-span-1 w-full"
                width={item.width}
                key={index}
                height={item.height}
                onClick={() => openModal(item)}
              />
            )
        )}
      </InfiniteScroll>
      {
        selectedImage && (
            <Modal item={selectedImage} onClose={()=>{closeModal()}}/>
        )
      }
    </>
  );
}
