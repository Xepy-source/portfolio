import style from "./Sidebar.module.css";
import buttonStyle from "./Button.module.css";
import Menuitem from "./Menuitem";
import { useMenuStore } from "../../store/useMenuStore";
import { menuItemList } from "../../fieldDataList";
import { useState } from "react";

export default function Sidebar() {
  const { setClickMenu } = useMenuStore();
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div
      className={`${style.sidebar_container} ${
        isOpen ? style.sidebar_view : ""
      }`}
    >
      <div className={style.hambuger_button_wrap}>
        <div
          className={buttonStyle.burger}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="navigation menu"
        >
          <span
            className={`${isOpen ? buttonStyle.line_first : ""}`}
            aria-hidden="true"
          />
          <span
            className={`${isOpen ? buttonStyle.line_second : ""}`}
            aria-hidden="true"
          />
          <span
            className={`${isOpen ? buttonStyle.line_last : ""}`}
            aria-hidden="true"
          />
        </div>
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
              handleClickFunc={setClickMenu}
            />
          );
        })}
      </div>
    </div>
  );
}
