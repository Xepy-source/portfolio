import { useState } from "react";
import style from "./Sidebar.module.css";
import { useMenuStore } from "../../store/useMenuStore";

interface props {
    icon: React.ReactNode;
    itemName: string;
    handleClickFunc(value: string): void;
}

export default function Menuitem({ icon, itemName, handleClickFunc }: props) {
    const [isOver, setIsOver] = useState(false);
    const { clickMenu } = useMenuStore();

    return (
        <div
            className={`${style.menu_item} ${isOver ? style.menu_mouse_over : ""} ${
                clickMenu === itemName ? style.clicked_menu : ""
            }`}
            onMouseOver={() => setIsOver(true)}
            onMouseOut={() => setIsOver(false)}
            onClick={() => handleClickFunc(itemName)}
        >
            {icon}
            <span>{itemName}</span>
        </div>
    );
}
