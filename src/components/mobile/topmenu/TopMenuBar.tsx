import style from "./TopMenuBar.module.css";
import { menuItemList } from "../../../fieldDataList";
import Menuitem from "./MenuItem";
import BurgerButton from "../../common/BurgerButton";
import { useState } from "react";

export default function TopMenuBar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className={style.top_menu_bar_container}>
        <span>Xepy's Portfolio</span>
        <BurgerButton isOpen={isOpen} setIsOpen={setIsOpen} color={"black"} />
      </div>
      <div className={style.top_menu_list_wrap}></div>
    </>
  );
}
