import style from "./Sidebar.module.css";
import Menuitem from "./Menuitem";
import BurgerButton from "./BurgerButton";
import { useMenuStore } from "../../store/useMenuStore";
import { menuItemList } from "../../fieldDataList";
import { useCallback, useState } from "react";

export default function Sidebar() {
  const { setClickMenu, setType } = useMenuStore();
  const [isOpen, setIsOpen] = useState(true);

  const handleClickMenu = useCallback(
    (value: string, type: string) => {
      setClickMenu(value);
      setType(type);
    },
    [setClickMenu, setType]
  );

  return (
    <div
      className={`${style.sidebar_container} ${
        isOpen ? style.sidebar_view : ""
      }`}
    >
      <BurgerButton isOpen={isOpen} setIsOpen={setIsOpen} />
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
