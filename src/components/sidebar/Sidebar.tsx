import style from "./Sidebar.module.css";
import Menuitem from "./Menuitem";
import { useMenuStore } from "../../store/useMenuStore";
import { menuItemList } from "../../fieldDataList";

export default function Sidebar() {
  const { setClickMenu } = useMenuStore();

  return (
    <div className={style.sidebar_container}>
      <div className={style.logo_wrap}>
        <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="" />
      </div>
      <span className={style.title_nickname}>Xepy</span>
      <div className={style.menu_list}>
        {menuItemList.map((el, idx) => {
          return <Menuitem key={idx} icon={el.icon} itemName={el.itemName} handleClickFunc={setClickMenu} />;
        })}
      </div>
    </div>
  );
}
