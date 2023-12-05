import BreadCrumb from "@/components/Breadcrumb";
import { Grid } from "@/components/Grid";
import ImageComponent from "@/components/ImageComponent";
import logo from "@/assets/images/logo-main-page.png";
import InputComponent from "@/components/Input";
import Avatar from "@/components/Avatar";
import defaultAvatar from "@/assets/images/default_avatar.png";
import { Badges } from "@/components/Badges";
import DrawerTrigger from "@/components/Drawer/DrawerTrigger";
import MenuIcon from "@/assets/images/menu_icon.svg";
import UserMenuIcon from "@/assets/images/user_menu_icon.svg";

export default function HeaderDesktop() {

    const inputClass = {
        componentClass:
          "w-full lg:max-w-[555px] rounded-[5px] overflow-hidden bg-[#EEEEEE] px-4 lg:pr-[63px] py-2 lg:text-base",
        iconWidth: 14,
        iconHeight: 19,
      };
    
      const avatarImages = new Array(4).fill({
        src: defaultAvatar,
        width: 29,
        height: 29,
      });
    
      const badgeText = new Array(5).fill({
        name: "natureza",
        link: "#",
      });
    
      const notificationAvatar = {
        src: UserMenuIcon,
        width: 19,
        height: 16
      }
    
    return (
        <section className=" w-full lg:max-w-[1340px] flex flex-col items-center justify-center gap-2 ">
        {/* Top*/}
        <section className="flex w-full justify-start gap-[75px] items-center ">
          <div className="flex items-center gap-7">
            <ImageComponent
              src={logo}
              width={127}
              height={18}
              link={{ href: "/", target: "_self" }}
              componentClass="lg:max-w-[127px]"
            />
            <Avatar images={avatarImages} />
          </div>
          <InputComponent badgeSize="sm" options={inputClass} />
          <div className="ml-auto flex items-center gap-4">
            <DrawerTrigger type="profile" position="right">
              <Avatar images={[notificationAvatar]} showIndicator={true}/>
            </DrawerTrigger>
            <DrawerTrigger type="menu" position="right">
              <ImageComponent
                src={MenuIcon}
                width={25}
                height={11}
                componentClass="lg:max-w-[29px]"
              />
            </DrawerTrigger>
          </div>
        </section>
        {/* Center */}
        <nav>
            <Badges.Navigation badges={badgeText}/>
        </nav>
        {/* Bottom */}
        <div className="flex w-full justify-between items-center ">
          <BreadCrumb route="resultado da busca" />
          <Grid.TabSwitcher />
          <Grid.Controller />
        </div>
      </section>
    )
}
