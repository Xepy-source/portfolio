import style from "./AboutUnit.module.css";

interface props {
  icon: React.ReactNode;
  title: string;
  content: string;
}

export default function AboutUnit({ icon, title, content }: props) {
  return (
    <div className={style.about_unit_wrap}>
      {icon}
      <div className={style.text_wrap}>
        <span>{title}</span>
        <span>{content}</span>
      </div>
    </div>
  );
}
