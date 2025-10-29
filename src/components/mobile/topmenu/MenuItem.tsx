interface props {
  itemName: string;
  handleClickMenu(value: string): void;
}

export default function Menuitem({ itemName, handleClickMenu }: props) {
  return <span onClick={() => handleClickMenu(itemName)}>{itemName}</span>;
}
