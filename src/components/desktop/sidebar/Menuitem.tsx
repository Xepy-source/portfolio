import { useState } from "react";
import style from "./Sidebar.module.css";
import { useMenuStore } from "../../../store/useMenuStore";

interface props {
  icon: React.ReactNode;
  itemName: string;
  handleClickFunc(value: string): void;
}

export default function Menuitem({ icon, itemName, handleClickFunc }: props) {
  const [isOver, setIsOver] = useState(false);

  return (
    <div
      className={`${style.menu_item} ${isOver ? style.menu_mouse_over : ""}`}
      onMouseOver={() => setIsOver(true)}
      onMouseOut={() => setIsOver(false)}
      onClick={() => handleClickFunc(itemName)}
    >
      {icon}
      <span>{itemName}</span>
    </div>
  );
}
