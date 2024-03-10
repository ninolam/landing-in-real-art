"use client";
import styles from "./JoinMovement.module.scss";
import { useAppContext } from "../../../context";
import parse from "html-react-parser";
import { Lang } from "../../../types/types";
import Link from "next/link";
import JoinMovementLink1 from "./JoinMovementLink1";
import VuesaxLinearStatusUp from "./VuesaxLinearStatusUp";
import { HiMiniShoppingBag } from "react-icons/hi2";
import { MdRealEstateAgent } from "react-icons/md";
import { TfiGallery } from "react-icons/tfi";
import JoinMovementLink2 from "./JoinMovementLink2";
import useSharedLogicJoinMovement from "./useSharedLogicJoinMovement";

const JoinMovement = () => {
  //Get the language of the global context
  const { lang } = useAppContext();
  const lang_ = lang as Lang;

  const {
    joinTrendButtons,
    setJoinTrendButtons,
    joinTrendtexts,
    setJoinTrendTexts,
  } = useSharedLogicJoinMovement();

  return (
    <div className={styles.frame48095739}>
      <div className={styles.titleJoinMovement}>
        <div className={styles.rejoindreLeMouvement}>
          {parse(joinTrendtexts.title[lang_])}
        </div>
      </div>
      <div className={styles.wrraperCard}>
        <div className={styles.frameArtgallery}>
          <div className={styles.frame76}>
            <div className={styles.rectangle52}></div>

            <TfiGallery className={styles["vuesax-linear-status"]} />
          </div>
          <div className={styles.frame7}>
            <div className={styles.heading2}>
              {parse(joinTrendtexts.artgallery_title[lang_])}
            </div>
            <div className={styles.paragraph2}>
              {parse(joinTrendtexts.artgallery_description[lang_])}
            </div>
          </div>
          <div className={styles.buttonJoinMovement}>
            <Link
              className={styles.joinMovementLink}
              href={joinTrendButtons.artgallery_join_link}
            >
              <div className={styles.heading3}>
                {joinTrendButtons.artgallery_join[lang_]}
              </div>
            </Link>
          </div>
        </div>
        <div className={styles.frameArtasservice}>
          <div className={styles.frame48095731}>
            <div className={styles.frame76}>
              <div className={styles.rectangle52}></div>
              <MdRealEstateAgent className={styles["vuesax-linear-status"]} />
            </div>
            <div className={styles.frame7}>
              <div className={styles.heading4}>
                {parse(joinTrendtexts.aas_title[lang_])}
              </div>
              <div className={styles.paragraph2}>
                {parse(joinTrendtexts.aas_description[lang_])}
              </div>
            </div>
            <div className={styles.buttonJoinMovement}>
              <Link
                className={styles.joinMovementLink}
                href={joinTrendButtons.aas_join_link}
              >
                <div className={styles.heading3}>
                  {joinTrendButtons.aas_join[lang_]}
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.frameMarketplace}>
          <div className={styles.frame76}>
            <div className={styles.rectangle52} />
            <HiMiniShoppingBag className={styles["vuesax-linear-status"]} />
          </div>
          <div className={styles.frame72}>
            <div className={styles.heading5}>
              {joinTrendtexts.marketplace_title[lang_]}
            </div>
            <div className={styles.paragraph2}>
              {parse(joinTrendtexts.marketplace_description[lang_])}
            </div>
          </div>
          <div className={styles.buttonJoinMovement}>
            <Link
              className={styles.joinMovementLink}
              href={joinTrendButtons.marketplace_join_link}
            >
              <div className={styles.heading3}>
                {joinTrendButtons.marketplace_join[lang_]}
              </div>
            </Link>
          </div>
        </div>

        <JoinMovementLink1 />
        <JoinMovementLink2 />
      </div>
    </div>
  );
};

export default JoinMovement;
