import { FaUser } from "react-icons/fa";
import { IoHomeOutline, IoCall, IoMail, IoLocationSharp, IoSchoolSharp, IoCalendar } from "react-icons/io5";
import { AiOutlineUser } from "react-icons/ai";
import { VscTools } from "react-icons/vsc";
import { PiGithubLogo, PiBuildingOfficeLight } from "react-icons/pi";

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
