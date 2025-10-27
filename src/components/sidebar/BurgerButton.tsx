import buttonStyle from "./Button.module.css";

interface props {
  isOpen: boolean;
  setIsOpen(value: boolean): void;
}

export default function BurgerButton({ isOpen, setIsOpen }: props) {
  return (
    <div className={buttonStyle.hambuger_button_wrap}>
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
  );
}
