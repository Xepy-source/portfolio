import style from "./SkillUnit.module.css";

interface props {
  icon: React.ReactNode;
  skillName: string | undefined;
  top: number;
  left: number;
  color: string;
  backgroundColor: string;
}

export default function SkillUnit({ icon, skillName, top, left, color, backgroundColor }: props) {
  return (
    <div
      className={style.skill_unit_wrap}
      style={{ top: `${top}%`, left: `${left}%`, color: `${color}`, backgroundColor: `${backgroundColor}` }}
    >
      {icon}
      <span>{skillName}</span>
    </div>
  );
}
