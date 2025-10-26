import { FaUser, FaReact, FaJenkins, FaDocker, FaGitlab, FaJava, FaAws } from "react-icons/fa";
import { IoHomeOutline, IoMail, IoLocationSharp, IoSchoolSharp, IoCalendar, IoLogoJavascript } from "react-icons/io5";
import { AiOutlineUser, AiOutlinePython } from "react-icons/ai";
import { VscTools } from "react-icons/vsc";
import { GrMysql } from "react-icons/gr";
import { TbBrandTypescript } from "react-icons/tb";
import { SiFastapi, SiSpringboot } from "react-icons/si";
import { PiGithubLogo, PiBuildingOfficeLight } from "react-icons/pi";
import { DiNginx } from "react-icons/di";

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
const birthDiffDays = (now.getTime() - birthDate.getTime()) / (1000 * 60 * 60 * 24);
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
    icon: <AiOutlinePython size={20} />,
    name: "python",
    top: 55,
    left: 60,
    color: "white",
    backgroundColor: "#FFD43B",
  },
  {
    icon: <SiFastapi size={20} />,
    name: "fastAPI",
    top: 25,
    left: 60,
    color: "white",
    backgroundColor: "#009485",
  },
  {
    icon: <GrMysql size={20} />,
    name: "MySQL",
    top: 15,
    left: 35,
    color: "white",
    backgroundColor: "#00758f",
  },
  {
    icon: <FaAws size={20} />,
    name: "AWS",
    top: 40,
    left: 35,
    color: "white",
    backgroundColor: "#FF9900",
  },
  {
    icon: <FaDocker size={20} />,
    name: "Docker",
    top: 65,
    left: 35,
    color: "white",
    backgroundColor: "#1D63ED",
  },
  {
    icon: <PiGithubLogo size={20} />,
    name: "Github",
    top: 40,
    left: 47,
    color: "white",
    backgroundColor: "black",
  },
  {
    icon: <FaGitlab size={20} />,
    name: "Gitlab",
    top: 15,
    left: 47,
    color: "white",
    backgroundColor: "#E2432A",
  },
  {
    icon: <SiSpringboot size={20} />,
    name: "Springboot",
    top: 20,
    left: 17,
    color: "white",
    backgroundColor: "#6AAD3D",
  },
  {
    icon: <FaJava size={20} />,
    name: "Java",
    top: 45,
    left: 17,
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
  {
    icon: <DiNginx size={60} />,
    // name: "Nginx",
    top: 55,
    left: 26,
    color: "white",
    backgroundColor: "#43A047",
  },
];
