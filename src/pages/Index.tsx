import style from "./Index.module.css";
import { useMediaQuery } from "react-responsive";
import Sidebar from "../components/desktop/sidebar/Sidebar";
import Main from "../components/desktop/main/Main";
import TopMenuBar from "../components/mobile/topmenu/TopMenuBar";
import MobileMain from "../components/mobile/main/Main";
import { useEffect } from "react";

export default function Index() {
  const isDesktop: boolean = useMediaQuery({
    query: "(min-width:1400px)",
  });
  const isMobile: boolean = useMediaQuery({
    query: "(max-width:1399px)",
  });

  useEffect(() => {
    const element = document.querySelector(
      '[aria-label="Open React Query Devtools"]'
    );
    if (element) {
      element.remove();
    }
  }, []);

  return (
    <div className={style.index_container}>
      {isDesktop && (
        <>
          <Sidebar />
          <Main />
        </>
      )}
      {isMobile && (
        <>
          <TopMenuBar />
          <MobileMain />
        </>
      )}
    </div>
  );
}
