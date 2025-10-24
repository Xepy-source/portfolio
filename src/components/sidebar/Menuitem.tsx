import { useState } from "react";
import style from "./Sidebar.module.css";

interface props {
  icon: React.ReactNode;
  itemName: string;
}

export default function Menuitem({ icon, itemName }: props) {
  const [isOver, setIsOver] = useState(false);

  return (
    <div
      className={`${style.menu_item} ${isOver ? style.menu_mouse_over : ""}`}
      onMouseOver={() => setIsOver(true)}
      onMouseOut={() => setIsOver(false)}
    >
      {icon}
      <span>{itemName}</span>
    </div>
  );
}
