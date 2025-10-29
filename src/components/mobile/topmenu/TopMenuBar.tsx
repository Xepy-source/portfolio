import style from "./TopMenuBar.module.css";
import { menuItemList } from "../../../fieldDataList";
import Menuitem from "./MenuItem";
import BurgerButton from "../../common/BurgerButton";
import { useState, useCallback } from "react";

export default function TopMenuBar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClickMenu = useCallback((clickMenu: string) => {
    const target = document.getElementsByClassName(
      clickMenu
    )[0] as HTMLDivElement;
    target.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <>
      <div className={style.top_menu_bar_container}>
        <span>Xepy's Portfolio</span>
        <BurgerButton isOpen={isOpen} setIsOpen={setIsOpen} color={"black"} />
      </div>
      <div
        className={`${style.top_menu_list_wrap} ${
          isOpen ? style.top_menu_open : ""
        }`}
      >
        {menuItemList.map((el, idx) => {
          return (
            <Menuitem
              key={idx}
              itemName={el.itemName}
              handleClickMenu={handleClickMenu}
            />
          );
        })}
      </div>
    </>
  );
}
