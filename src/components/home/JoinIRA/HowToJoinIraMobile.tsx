"use client"
import styles from './HowToJoinIraMobile.module.scss'

const HowToJoinIraMobile = () => {
  return (
    <div className={styles["lp-mobile__feature"]}>
    <img
      className={styles["lp-mobile__rectangle-210"]}
      src="img/rectangle-2100.png"
    />
    <div className={styles["lp-mobile__frame-303"]}>
      <div className={styles["lp-mobile__comment"]}>Comment ? </div>
      <div
        className={
          styles[
            "lp-mobile__ira-ambitionne-de-cr-er-de-vraies-galeries-d-arts-physique-auto-g-r-es-par-la-communaut-dao-nos-galeries-seront-des-portails-entre-le-monde-du-web-3-et-le-monde-r-el-de-l-art"
          ]
        }
      >
        Ira ambitionne de créer de vraies galeries d’arts physique
        auto-gérées par la communauté (DAO). Nos galeries seront des
        portails entre le monde du Web3 et le monde réel de l’art{" "}
      </div>
      <div className={styles["lp-mobile__link-button"]}>
        <div className={styles["lp-mobile__button2"]}>
          <div className={styles["lp-mobile__rejoindre-ira2"]}>
            Rejoindre IRA{" "}
          </div>
        </div>
        <div className={styles["lp-mobile__button3"]}>
          <div className={styles["lp-mobile__je-d-marre2"]}>
            Je démarre{" "}
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default HowToJoinIraMobile