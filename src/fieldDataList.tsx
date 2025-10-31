import {
  FaUser,
  FaReact,
  FaJenkins,
  FaDocker,
  FaGitlab,
  FaJava,
  FaAws,
} from "react-icons/fa";
import {
  IoHomeOutline,
  IoMail,
  IoLocationSharp,
  IoSchoolSharp,
  IoCalendar,
  IoLogoJavascript,
} from "react-icons/io5";
import { RiPhpFill } from "react-icons/ri";
import { AiOutlineUser, AiOutlinePython } from "react-icons/ai";
import { VscTools } from "react-icons/vsc";
import { GrMysql } from "react-icons/gr";
import { TbBrandTypescript } from "react-icons/tb";
import { SiFastapi, SiSpringboot } from "react-icons/si";
import { PiGithubLogo, PiBuildingOfficeLight } from "react-icons/pi";
import { DiNginx } from "react-icons/di";

export const introduce = `저는 안정적인 Java/Spring 환경부터 최신 Python/FastAPI 스택까지, 다양한 기술을 활용해 서비스를 구축하고 개발해 온 웹 개발자 설승훈입니다. 
  저는 동료가 쉽게 이해할 수 있는 깨끗한 코드를 지향하며, 비즈니스 문제를 해결하기 위해 효율적인 기술을 탐구하고 적용하려고 노력합니다.`;

export const menuItemList = [
  {
    icon: <IoHomeOutline />,
    itemName: "Home",
  },
  {
    icon: <AiOutlineUser />,
    itemName: "About",
  },
  {
    icon: <VscTools />,
    itemName: "Skills",
  },
  {
    icon: <PiGithubLogo />,
    itemName: "Git",
  },
  {
    icon: <PiBuildingOfficeLight />,
    itemName: "Career",
  },
];

const now = new Date();
const startDate = new Date("2021-05-01");
const diffDays = (now.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24);
const diffYears = Math.floor(diffDays / 365);
const diffMonth = Math.round((diffDays % 365) / 30);
const yearMonth = diffYears + "년 " + diffMonth + "개월";

const birthDate = new Date("1993-01-18");
const birthDiffDays =
  (now.getTime() - birthDate.getTime()) / (1000 * 60 * 60 * 24);
const birthDiffYears = Math.floor(birthDiffDays / 365);

export const aboutList = [
  {
    icon: <FaUser size={40} />,
    title: "이름",
    content: "설승훈",
  },
  {
    icon: <IoCalendar size={40} />,
    title: "경력",
    content: yearMonth,
  },
  {
    icon: <IoCalendar size={40} />,
    title: "나이",
    content: "만 " + birthDiffYears + "살",
  },
  {
    icon: <IoMail size={40} />,
    title: "이메일",
    content: "solnd3@gmail.com",
  },
  {
    icon: <IoLocationSharp size={40} />,
    title: "위치",
    content: "서울특별시 관악구",
  },
  {
    icon: <IoSchoolSharp size={40} />,
    title: "학력",
    content: "금오공과대학교 \n컴퓨터공학과",
  },
];

export const mobileAboutList = [
  {
    icon: <FaUser size={40} />,
    title: "이름",
    content: "설승훈",
  },
  {
    icon: <IoCalendar size={40} />,
    title: "나이",
    content: "만 " + birthDiffYears + "살",
  },
  {
    icon: <IoLocationSharp size={40} />,
    title: "위치",
    content: "서울특별시 \n관악구",
  },
  {
    icon: <IoCalendar size={40} />,
    title: "경력",
    content: yearMonth,
  },
  {
    icon: <IoMail size={40} />,
    title: "이메일",
    content: "solnd3@\ngmail.com",
  },
  {
    icon: <IoSchoolSharp size={40} />,
    title: "학력",
    content: "금오공과대학교 \n컴퓨터공학과",
  },
];

export const skillList = [
  {
    icon: <FaReact size={20} />,
    name: "React",
    top: 15,
    left: 80,
    color: "white",
    backgroundColor: "#61DBFB",
  },
  {
    icon: <TbBrandTypescript size={20} />,
    name: "TypeScript",
    top: 40,
    left: 80,
    color: "white",
    backgroundColor: "#007acc",
  },
  {
    icon: <IoLogoJavascript size={20} />,
    name: "JavaScript",
    top: 65,
    left: 80,
    color: "white",
    backgroundColor: "#f0db4f",
  },
  {
    icon: <SiFastapi size={20} />,
    name: "fastAPI",
    top: 25,
    left: 68,
    color: "white",
    backgroundColor: "#009485",
  },
  {
    icon: <AiOutlinePython size={20} />,
    name: "python",
    top: 55,
    left: 68,
    color: "white",
    backgroundColor: "#FFD43B",
  },
  {
    icon: <FaGitlab size={20} />,
    name: "Gitlab",
    top: 15,
    left: 57,
    color: "white",
    backgroundColor: "#E2432A",
  },
  {
    icon: <PiGithubLogo size={20} />,
    name: "Github",
    top: 40,
    left: 57,
    color: "white",
    backgroundColor: "black",
  },
  {
    icon: <GrMysql size={20} />,
    name: "MySQL",
    top: 15,
    left: 45,
    color: "white",
    backgroundColor: "#00758f",
  },
  {
    icon: <FaAws size={20} />,
    name: "AWS",
    top: 40,
    left: 45,
    color: "white",
    backgroundColor: "#FF9900",
  },
  {
    icon: <FaDocker size={20} />,
    name: "Docker",
    top: 65,
    left: 45,
    color: "white",
    backgroundColor: "#1D63ED",
  },
  {
    icon: <RiPhpFill size={20} />,
    name: "php",
    top: 25,
    left: 35,
    color: "white",
    backgroundColor: "#474A8A",
  },
  {
    icon: <DiNginx size={60} />,
    // name: "Nginx",
    top: 55,
    left: 35,
    color: "white",
    backgroundColor: "#43A047",
  },
  {
    icon: <SiSpringboot size={20} />,
    name: "Springboot",
    top: 20,
    left: 19,
    color: "white",
    backgroundColor: "#6AAD3D",
  },
  {
    icon: <FaJava size={20} />,
    name: "Java",
    top: 45,
    left: 22,
    color: "white",
    backgroundColor: "#007396",
  },
  {
    icon: <FaJenkins size={20} />,
    name: "Jenkins",
    top: 30,
    left: 5,
    color: "white",
    backgroundColor: "#D33834",
  },
];

export const careerList = [
  {
    title: "자격증 취득",
    date: "2018-08",
    content: "정보처리기사",
  },
  {
    title: "금오공과대학교",
    date: "2020-02",
    content: "컴퓨터공학과 졸업",
  },
  {
    title: "코리아 it 아카데미",
    date: "2020-11 ~ 2021-04",
    content: "웹 프로그래밍 백엔드 과정 수료",
  },
  {
    title: "드림아이디어소프트",
    date: "2021-05 ~ 2022-07",
    content: `시골투어 웹 사이트 백엔드(Java) 보수작업,
              시골투어 모바일 사이트 백엔드(Java) 및 동적페이지(JSP, JavaScript) 제작,
              세일투나잇 앱(AOS, iOS - 웹뷰)및 웹(php) 고도화 작업 및 유지보수,
              자립해냄 백엔드(Java) 및 동적페이지(JSP, JavaScript) 제작,
              자립해냄 앱(AOS, iOS - 웹뷰) 제작`,
  },
  {
    title: "나라지식정보",
    date: "2022-07 ~ (재직중)",
    content: `고전문서 OCR 프로젝트 관리자 페이지 및 회원 기능
              근대문서 OCR 및 현대문서 OCR 작업 페이지
              OCR 프로젝트 유지보수 및 고도화

              프론트엔드 (React + Typescript)
              백엔드 (Python - FastAPI)
              DB (MariaDB)
              협업툴 - GitLab

              서버 세팅
              - 형상관리 : GitLab
              - 빌드 및 배포 : Jenkins
              - 모니터링 : Zabbix
              - 정적분석 : Sonarqube
              - 배포 및 구동 : Docker`,
  },
];
