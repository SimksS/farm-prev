import BreadCrumb from "@/components/Breadcrumb";
import { Grid } from "@/components/Grid";
import ImageComponent from "@/components/ImageComponent";
import logo from "@/assets/images/logo-main-page.png";
import InputComponent from "@/components/Input";
import Avatar from "@/components/Avatar";
import { Badges } from "@/components/Badges";
import DrawerTrigger from "@/components/Drawer/DrawerTrigger";
import MenuIcon from "@/assets/images/menu_icon.svg";
import UserMenuIcon from "@/assets/images/user_menu_icon.svg";


export default function HeaderMobile() {

    const inputClass = {
        componentClass:
          "w-full lg:max-w-[555px] lg:rounded-[5px] overflow-hidden bg-[#EEEEEE] px-4 pr-[60px] py-2 lg:text-base rounded-[43px] ",
        iconWidth: 14,
        iconHeight: 19,
      };
    
    
      const badgeText = new Array(10).fill({
        name: "natureza",
        link: "#",
      });
      const notificationAvatar = {
        src: UserMenuIcon,
        width: 19,
        height: 16
      }
   
    
    return(
        <section className="flex flex-col pl-4 overflow-hidden gap-3">
          <section className="flex items-center  pr-4 w-full justify-between gap-12">
            <DrawerTrigger type="menu" position="left">
              <ImageComponent src={MenuIcon} width={25} height={11} componentClass="lg:max-w-[29px]"/>
            </DrawerTrigger>
            <ImageComponent src={logo}width={127}height={18}link={{ href: "/", target: "_self" }}componentClass="max-w-[127px] "/>
            <DrawerTrigger type="profile" position="right">
              <Avatar images={[notificationAvatar]} showIndicator={true}/>
            </DrawerTrigger>
          </section>
          <section className="flex pr-4">
            <InputComponent badgeSize="sm" options={inputClass} />
          </section>
          <section className="w-full overflow-x-auto no-scrollbar pr-4">
            <nav className="w-max">
                  <Badges.Navigation badges={badgeText}/>
            </nav>
          </section>
          <section className="flex w-full justify-between items-center  pr-4">
                <BreadCrumb route="resultado da busca" />
                <Grid.Controller />
          </section>
      </section>
    )
}
