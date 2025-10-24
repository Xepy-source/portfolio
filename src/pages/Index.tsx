import style from "./Index.module.css";
import Sidebar from "../components/sidebar/Sidebar";
import Main from "../components/main/Main";

export default function Index() {
  return (
    <div className={style.index_container}>
      <Sidebar />
      <Main />
    </div>
  );
}
