import style from "./Sidebar.module.css";
import Menuitem from "./Menuitem";
import BurgerButton from "../../common/BurgerButton";
import { useMenuStore } from "../../../store/useMenuStore";
import { menuItemList } from "../../../fieldDataList";
import { useCallback, useState, useEffect } from "react";

export default function Sidebar() {
  const { clickMenu, setClickMenu } = useMenuStore();
  const [isOpen, setIsOpen] = useState(true);

  const handleClickMenu = useCallback(
    (value: string) => {
      setClickMenu(value);
    },
    [setClickMenu]
  );

  useEffect(() => {
    const target = document.getElementsByClassName(
      clickMenu
    )[0] as HTMLDivElement;

    if (target) target.scrollIntoView({ behavior: "smooth" });
  }, [clickMenu]);

  return (
    <div
      className={`${style.sidebar_container} ${
        isOpen ? style.sidebar_view : ""
      }`}
    >
      <div className={style.hambuger_button_wrap}>
        <BurgerButton isOpen={isOpen} setIsOpen={setIsOpen} color={"#ccc"} />
      </div>
      <div className={style.logo_wrap}>
        <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="" />
      </div>
      <span className={style.title_nickname}>Xepy</span>
      <div className={style.menu_list}>
        {menuItemList.map((el, idx) => {
          return (
            <Menuitem
              key={idx}
              icon={el.icon}
              itemName={el.itemName}
              handleClickFunc={handleClickMenu}
            />
          );
        })}
      </div>
    </div>
  );
}
