import style from "./Index.module.css";
import Sidebar from "../components/sidebar/Sidebar";
import Main from "../components/main/Main";
import MobileMain from "../components/mobile/Main";
import { useMediaQuery } from "react-responsive";
import { useEffect, useState } from "react";
import { useMenuStore } from "../store/useMenuStore";

export default function Index() {
  const [scrollY, setScrollY] = useState<number>(0);
  const { setClickMenu } = useMenuStore();

  const isDesktop: boolean = useMediaQuery({
    query: "(min-width:1400px)",
  });
  const isMobile: boolean = useMediaQuery({
    query: "(max-width:1399px)",
  });

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

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
