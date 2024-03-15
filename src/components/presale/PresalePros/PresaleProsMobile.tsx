import { useAppContext } from "../../../context";
import { Lang } from "../../../types/types";
import styles from "./PresaleProsMobile.module.scss";
import parse from 'html-react-parser';
import useSharedLogixPresalePros from "./useSharedLogixPresalePros";
import Link from "next/link";

const PresaleProsMobile = () => {

    const {lang} = useAppContext()
    const lang_ = lang as Lang

    const {presaleProsTexts, setPresaleProsTexts, presaleProsButtons, setPresaleProsButtons} = useSharedLogixPresalePros()

  return (
    <div className={styles["frame-48095815"]}>
      <div className={styles["frame-48095815__frame-36563"]}>
        <div className={styles["presaleProsMainTitle"]}>
            {parse(presaleProsTexts.mainTitle[lang_])}
        </div>
        <div className={styles["presaleProsMainDesc"]}>
          {parse(presaleProsTexts.mainDescription[lang_])}
        </div>
      </div>
      <div className={styles["frame-48095815__frame-48095814"]}>
        <div className={styles["frame-48095815__frame-48095732"]}>
          <div className={styles["frame-48095815__frame-7"]}>
            <div className={styles["frame-48095815__heading"]}>
              Investissement{" "}
            </div>
            <div className={styles["frame-48095815__paragraph"]}>
              Possibilité d’acquérir nos œuvres sous le prix su marché{" "}
            </div>
          </div>
          <div className={styles["frame-48095815__frame-3"]}>
            <Link href="#dropPanel" className={styles["frame-48095815__heading2"]}>    
              Acquérir une œuvre{" "}
            </Link>
          </div>
        </div>
        <div className={styles["frame-48095815__slider"]}>
          
          
        </div>
      </div>
    </div>
  );
};


export default PresaleProsMobile