import style from "./CareerItem.module.css";

interface props {
  title: string;
  date: string;
  content: string;
}

export default function CareerItem({ title, date, content }: props) {
  return (
    <div className={style.carrer_item_container}>
      <span className={style.career_title}>{title}</span>
      <span className={style.career_date}>{date}</span>
      <div className={style.career_content}>{content}</div>
    </div>
  );
}
