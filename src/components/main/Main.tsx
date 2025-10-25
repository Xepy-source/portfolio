import style from "./Main.module.css";
import { ReactTyped } from "react-typed";
import AboutUnit from "./AboutUnit";
import { aboutList } from "../../fieldDataList";

export default function Main() {
  const introduce =
    "저는 안정적인 Java/Spring 환경부터 최신 Python/FastAPI 스택까지, 다양한 기술을 활용해 서비스를 구축하고 개발해 온 웹 개발자 설승훈입니다. \n저는 동료가 쉽게 이해할 수 있는 깨끗한 코드를 지향하며, 비즈니스 문제를 해결하기 위해 효율적인 기술을 탐구하고 적용하려고 노력합니다.";

  return (
    <div className={style.main_container}>
      <div className={`${style.main_home_wrap} Home`}>
        <img src={`${process.env.PUBLIC_URL}/background.png`} alt="" />
        <div className={style.main_img_span_wrap}>
          <span>Xepy</span>
          <ReactTyped strings={["저는 웹 개발자 입니다."]} typeSpeed={200} backSpeed={100} loop={true} />
        </div>
      </div>
      <div className={`${style.main_about_wrap} About`}>
        <span className={style.sub_title}>About</span>
        <div className={style.empty_border}></div>
        <span style={{ whiteSpace: "pre-line" }}>{introduce}</span>
        <div className={style.about_unit_container}>
          {aboutList.map((el, idx) => {
            return <AboutUnit key={idx} icon={el.icon} title={el.title} content={el.content} />;
          })}
        </div>
      </div>
      <div className={`${style.main_skills_wrap} Skills`}>
        <span className={style.sub_title}>Skills</span>
        <div className={style.empty_border}></div>
      </div>
    </div>
  );
}
