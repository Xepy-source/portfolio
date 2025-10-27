import style from "./Index.module.css";
import Sidebar from "../components/sidebar/Sidebar";
import Main from "../components/main/Main";
import MobileMain from "../components/mobile/Main";
import { useMediaQuery } from "react-responsive";

export default function Index() {
  const isDesktop: boolean = useMediaQuery({
    query: "(min-width:1400px)",
  });
  const isMobile: boolean = useMediaQuery({
    query: "(max-width:1399px)",
  });

  return (
    <div className={style.index_container}>
      {/* {isDesktop && ( */}
      <>
        <Sidebar />
        <Main />
      </>
      {/* )} */}
      {/* {isMobile && <MobileMain />} */}
    </div>
  );
}
