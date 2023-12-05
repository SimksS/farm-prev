import { ReactNode, createContext, useState, useReducer} from "react";
import defaultImage from "@/assets/images/model_grid_image.png";
import defaultImage2 from "@/assets/images/model_grid_image_2.png";

interface IPageContext {
  badges: IBadges[] | [];
  setBadges: React.Dispatch<React.SetStateAction<never[] | IBadges[]>>;
  randomWords: string[];
  knownWordsMap: Map<string, string>;
  GetSearchImages: (reload_Images?: boolean) => Promise<Image[]>;
  gridImages: IGridImage;
  dispatch: React.Dispatch<IReducer>;
  loading: boolean
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
}

interface IChildren {
  children?: ReactNode;
}
interface IBadges {
  name: string;
  image?: string;
}

interface Image {
  src: string;
  width: number;
  height: number;
  type: string;
  info?:IInfo
}
interface IInfo{
  title: string
  description: string;
  tags:{ name: string, link: string}[]
  }

interface IGridImage {
  gridType?: string;
  itemsPerRow?: string;
  images?: Image[];
}

interface IReducer {
  type: string;
  itemsPerRow?: string;
  images?: Image[];
  gridType?: string;
}

export const PageContext = createContext({} as IPageContext);

export default function Providers({ children }: IChildren) {
  const initialState: IGridImage = {
    gridType: "imagens",
    itemsPerRow: "4",
    images: [],
  };

 
   
  const reducer: React.Reducer<IGridImage, IReducer> = (state, action) => {
    const dispatchAction: { [key: string]: IGridImage } = {
      change_items_per_row: {
        ...state,
        itemsPerRow: action.itemsPerRow,
      },
      change_grid_type: {
        ...state,
        gridType: action.gridType,
      },
      change_images_result: {
        ...state,
        images: action.images,
      },
      reset_images_result:{
        ...state,
        images: [],
      }
    };

    return dispatchAction[action.type];
  };

  const [gridImages, dispatch] = useReducer(reducer, initialState);
  const [badges, setBadges] = useState<never[] | IBadges[]>([]);
  const [loading,setIsLoading] = useState(true)

  const randomWords = ["natureza", "cris lucchetti"];
  const knownWordsMap = new Map();
  for (let i = 0; i < randomWords.length; i++) {
    knownWordsMap.set(randomWords[i], i);
  }

  const requestFromServer = (): Promise<Image[]> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        let imagens = new Array(16).fill({});
        imagens = imagens.map(() => {
          const type = Math.random() < 0.5 ? "imagens" : "coletaneas";
          const image = Math.random() < 0.5 ? defaultImage : defaultImage2;
          return { 
              src: image,
              width: 331,
              height: 358, 
              type: type,
              informations:{
                title: "lorem ipsum dolor",
                tags: [{name: "test",link:"#"}, {name: "nome",link:"#"}, {name: "dolor",link:"#"}],
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur feugiat elementum augue ut luctus. Aenean et erat tempus mi laoreet pellentesque vitae id orci. Etiam quam justo, posuere eget felis at, pellentesque auctor lorem. Aliquam pretium nisl magna, vitae fringilla lectus rutrum in. Nulla urna dolor, suscipit eu quam et, efficitur congue lacus. Fusce placerat porttitor condimentum. Nullam vehicula tristique nisl, eu consequat purus pretium quis. "
              } };
        });
        resolve(imagens);
      }, 5000);
    });
  };

  const GetSearchImages = async (reload_Images?:boolean): Promise<Image[]> => {
    if(reload_Images) dispatch({type: "reset_images_result"})
    const images = await requestFromServer();
    dispatch({type: "change_images_result", images:[...gridImages.images || [], ...images] })
    setIsLoading(false)
    return images;
  };

  return (
    <PageContext.Provider
      value={{
        badges,
        setBadges,
        randomWords,
        knownWordsMap,
        GetSearchImages,
        gridImages,
        dispatch,
        loading,
        setIsLoading
      }}
    >
      {children}
    </PageContext.Provider>
  );
}
