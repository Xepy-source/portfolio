import style from "./CareerItem.module.css";

interface props {
  title: string;
  date: string;
  content: string;
  width: number;
}

export default function CareerItem({ title, date, content, width }: props) {
  return (
    <div className={style.carrer_item_container} style={{ width: `${width}%` }}>
      <span className={style.career_title}>{title}</span>
      <span className={style.career_date}>{date}</span>
      <div className={style.career_content}>{content}</div>
    </div>
  );
}
