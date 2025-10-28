import style from "./MenuItem.module.css";

interface props {
  itemName: string;
}

export default function Menuitem({ itemName }: props) {
  return <div>{itemName}</div>;
}
