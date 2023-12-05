import search from "@/assets/images/search.svg";
import { Badges } from "@/components/Badges";
import { PageContext } from "@/context/pageContext";
import { useContext,useEffect,useRef } from "react";
import { useNavigate } from "react-router-dom";

interface IProps {
  options?: IOptions;
  badgeSize: string;
}

interface IOptions {
  componentClass?: string;
  iconWidth: number;
  iconHeight: number;
}

type HTMLElementEvent<T extends HTMLElement> = Event & {
  target: T;
};

const InputComponent = ({ options, badgeSize }: IProps) => {

    const tagContainerRef = useRef<HTMLDivElement>(null);
    const tagsContainerRef = useRef<HTMLUListElement>(null);
  const { knownWordsMap, badges, setBadges, GetSearchImages } =
    useContext(PageContext);

  const navigate = useNavigate();

  let defaultProps: IOptions = {
    componentClass:
      "w-full lg:max-w-[1190px] rounded-[43px] overflow-hidden bg-[#EEEEEE] px-10 py-5 lg:text-4xl",
    iconWidth: 31,
    iconHeight: 42,
  };

  if (options) defaultProps = { ...options };

  const HandleSubmit = async (
    e: React.FormEvent<HTMLFormElement> & HTMLElementEvent<HTMLInputElement>
  ) => {
    e.preventDefault();
    const params = [];
    const badges = e.target.querySelectorAll("li");
    const inputElement = e.target.querySelector("input");
    badges.forEach((badge) => params.push(badge.textContent));
    params.push(inputElement?.value.trim().split(" ").join("%2C"));
    GetSearchImages(true);
    navigate(`/search?fq=${params.join("%2C")}`);
  };

  const HandleChange = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const keyCode: { [key: string]: (e: React.KeyboardEvent<HTMLInputElement>) => void } = {space: SetBadge,
      backspace: RemoveBadge,};
    const action = keyCode[e.nativeEvent.code.toLowerCase()];

    if (action) {
      action(e);
    }
  };

  const RemoveBadge = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    if (!value && badges.length) {
      setBadges((badges) => [...badges.slice(0, -1)]);
    }
  };

  const SetBadge = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value?.trim();

    if (knownWordsMap.has(value)) {
      setBadges((badges) => [...badges, { name: value }]);
      e.currentTarget.value = "";
    }
  };

  useEffect(()=>{
    const container = tagContainerRef.current;
    const tagsContainer = tagsContainerRef.current;
    
    if (container && tagsContainer) {
      const containerWidth = container.offsetWidth;
      const tagsWidth = tagsContainer.offsetWidth;
      if (tagsWidth > (containerWidth * 0.35)) {
        container.scrollLeft = tagsWidth - containerWidth;
      } else {
        container.scrollLeft = 0;
      }
    }
    },[badges.length])

  return (
    <form
      onSubmit={(e) =>
        HandleSubmit(
          e as React.FormEvent<HTMLFormElement> &
            Event & { target: HTMLInputElement }
        )
      }
      className={`${defaultProps.componentClass} flex items-center gap-2 relative`}
    >
      <div ref={tagContainerRef} className="flex items-center gap-2 overflow-auto w-full no-scrollbar">
        <ul ref={tagsContainerRef} className="flex gap-1 items-center">
          {badges?.map((item, index) => (
            <Badges.Input size={badgeSize} key={index} badges={item} />
          ))}
        </ul>
        <input
          onKeyDown={(e) => HandleChange(e)}
          className="input w-full h-[inherit] px-0 focus:ring-0 focus:outline-none min-w-[35%] border-none focus:border-none [font-size:inherit]"
          type="text"
        />
      </div>
      <div className="flex items-center gap-2  flex-grow absolute right-[37px] top-0 bottom-0 ">
        <button className="" type="submit">
          <img
            src={search}
            alt="icone de busca"
            className="h-full"
            style={{ height: `${defaultProps.iconHeight}px` }}
            width={defaultProps.iconWidth}
            height={defaultProps.iconHeight}
          />
        </button>
      </div>
    </form>
  );
};


export default InputComponent;
