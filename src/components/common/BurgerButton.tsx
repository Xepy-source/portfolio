import buttonStyle from "./BurgerButton.module.css";

interface props {
  isOpen: boolean;
  setIsOpen(value: boolean): void;
  color: string;
}

export default function BurgerButton({ isOpen, setIsOpen, color }: props) {
  return (
    <div>
      <div
        className={buttonStyle.burger}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="navigation menu"
      >
        <span
          className={`${isOpen ? buttonStyle.line_first : ""}`}
          aria-hidden="true"
          style={{ backgroundColor: color }}
        />
        <span
          className={`${isOpen ? buttonStyle.line_second : ""}`}
          aria-hidden="true"
          style={{ backgroundColor: color }}
        />
        <span
          className={`${isOpen ? buttonStyle.line_last : ""}`}
          aria-hidden="true"
          style={{ backgroundColor: color }}
        />
      </div>
    </div>
  );
}
