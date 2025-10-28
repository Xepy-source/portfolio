import style from "./SkillUnit.module.css";

interface props {
  icon: React.ReactNode;
  skillName: string | undefined;
  color: string;
  backgroundColor: string;
}

export default function SkillUnit({
  icon,
  skillName,
  color,
  backgroundColor,
}: props) {
  return (
    <div
      className={style.skill_unit_wrap}
      style={{ color: `${color}`, backgroundColor: `${backgroundColor}` }}
    >
      {icon}
      <span>{skillName}</span>
    </div>
  );
}
