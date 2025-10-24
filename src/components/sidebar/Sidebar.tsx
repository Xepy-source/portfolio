import style from "./Sidebar.module.css";
import { IoHomeOutline } from "react-icons/io5";
import { AiOutlineUser } from "react-icons/ai";
import { VscTools } from "react-icons/vsc";
import { PiGithubLogo, PiBuildingOfficeLight } from "react-icons/pi";
import Menuitem from "./Menuitem";

export default function Sidebar() {
  const menuItemList = [
    {
      icon: <IoHomeOutline />,
      itemName: "Home",
    },
    {
      icon: <AiOutlineUser />,
      itemName: "About",
    },
    {
      icon: <VscTools />,
      itemName: "Skills",
    },
    {
      icon: <PiGithubLogo />,
      itemName: "Git",
    },
    {
      icon: <PiBuildingOfficeLight />,
      itemName: "Career",
    },
  ];

  return (
    <div className={style.sidebar_container}>
      <div className={style.logo_wrap}>
        <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="" />
      </div>
      <div className={style.title_wrap}>
        <span className={style.title_nickname}>Xepy</span>
        <span className={style.title_job}>Web_Developer</span>
      </div>
      <div className={style.menu_list}>
        {menuItemList.map((el) => {
          return <Menuitem icon={el.icon} itemName={el.itemName} />;
        })}
      </div>
    </div>
  );
}
