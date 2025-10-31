import style from "./Main.module.css";
import { ReactTyped } from "react-typed";
import { aboutList, skillList, careerList } from "../../../fieldDataList";
import { FaArrowUpLong, FaArrowDownLong, FaGithub } from "react-icons/fa6";
import AboutUnit from "../../common/AboutUnit";
import SkillUnit from "./SkillUnit";
import CareerItem from "../../common/CareerItem";

export default function Main() {
  return (
    <div className={style.main_container}>
      <div className={`${style.main_home_wrap} Home`}>
        <img src={`${process.env.PUBLIC_URL}/background.jpg`} alt="" />
        <div className={style.main_img_span_wrap}>
          <span>Xepy</span>
          <ReactTyped
            strings={["저는 웹 개발자 입니다."]}
            typeSpeed={200}
            backSpeed={100}
            loop={true}
          />
        </div>
      </div>
      <div
        className={`${style.main_title_wrap} ${style.main_about_wrap} About`}
      >
        <div className={style.item_wrap}>
          <span className={style.sub_title}>About</span>
          <div className={style.empty_border}></div>
          <div className={style.about_unit_container}>
            {aboutList.map((el, idx) => {
              return (
                <AboutUnit
                  key={idx}
                  icon={el.icon}
                  title={el.title}
                  content={el.content}
                />
              );
            })}
          </div>
        </div>
      </div>
      <div
        className={`${style.main_title_wrap} ${style.main_skills_wrap} Skills`}
      >
        <div className={style.item_wrap}>
          <span className={style.sub_title}>Skills</span>
          <div className={style.empty_border}></div>
          <div className={style.skills_view_wrap}>
            {skillList.map((el, idx) => {
              return (
                <SkillUnit
                  key={idx}
                  icon={el.icon}
                  skillName={el.name}
                  color={el.color}
                  backgroundColor={el.backgroundColor}
                />
              );
            })}
            <div className={style.skills_level_degree_wrap}>
              <div className={style.skill_level_degree}>
                <span>High Level</span>
                <FaArrowUpLong />
              </div>
              <div className={style.skill_level_degree}>
                <span>Low Level</span>
                <FaArrowDownLong />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`${style.main_title_wrap} ${style.main_git_wrap} Git`}>
        <div className={style.item_wrap}>
          <span className={style.sub_title}>Git</span>
          <div className={style.empty_border}></div>
          <div
            className={style.github_address_wrap}
            onClick={() => window.open("https://github.com/Xepy-source")}
          >
            <FaGithub size={80} />
            <span>GitHub</span>
          </div>
        </div>
      </div>
      <div
        className={`${style.main_title_wrap} ${style.main_career_wrap} Career`}
      >
        <div className={style.item_wrap}>
          <span className={style.sub_title}>Career</span>
          <div className={style.empty_border}></div>
          <div className={style.career_items_wrap}>
            {careerList.map((el, idx) => {
              return (
                <CareerItem
                  key={idx}
                  title={el.title}
                  date={el.date}
                  content={el.content}
                  width={95}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
