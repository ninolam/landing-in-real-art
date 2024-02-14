import styles from './InvestmentCardDetail.module.scss'


const CheckBoxChecked = () => {
 return (
  <svg
          className={styles["frame-3387__group-36601"]}
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="11" cy="11" r="11" fill="#E4EBF5" />
          <path
            d="M7 11L10 14L16 8"
            stroke="#1751F0"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
 )
}

const InvestmentCardDetail = () => {
  return (

    <div className={styles["investmentCardDetailContainer"]}>
      <div className={styles["frame-3387__frame-3386"]}>

          <CheckBoxChecked/>
        <div
          className={styles["frame-3387__droit-de-cession-de-20-ans-avec-possibilit-s-tendues-telles-que-reproduire-l-uvre-distribuer-l-uvre-exposer-l-uvre-commercialiser-l-uvre-utiliser-l-uvre-des-fins-commerciales-c-der-le-droit-de-cession-une-tierce-personne-adapter-l-uvre"]}
        >
          Droit de cession de 20 ans + avec possibilités étendues telles que :
          Reproduire l&#039;œuvre Distribuer l&#039;œuvre Exposer l&#039;œuvre
          commercialiser l&#039;œuvre Utiliser l&#039;œuvre à des fins commerciales
          Céder le droit de cession à une tierce personne Adapter l’œuvre
        </div>
      </div>
      <div className={styles["frame-3387__frame-3385"]}>
        <div className={styles["frame-3387__frame-3379"]}>
          <CheckBoxChecked/>
          <div className={styles["frame-3387__rencontre-avec-l-artiste"]}>
            Rencontre avec l’artiste
          </div>
        </div>
        <div className={styles["frame-3387__frame-3380"]}>
          <CheckBoxChecked/>

          <div className={styles["frame-3387__cl-ledger-designer-par-l-artiste"]}>
            Clé Ledger designer par l’artiste
          </div>
        </div>
        <div className={styles["frame-3387__frame-3381"]}>
          <CheckBoxChecked/>
          
          <div className={styles["frame-3387__libre-choix-de-la-galerie-de-d-p-t"]}>
            Libre choix de la galerie de dépôt
          </div>
        </div>
        <div className={styles["frame-3387__frame-3382"]}>
          <div className={styles["frame-3387__group-366013"]}>
            <div className={styles["frame-3387__ellipse-11"]}></div>
              <CheckBoxChecked/>
            <div className={styles["frame-3387__group-366003"]}>
              <div className="frame-3387__ellipse-11"></div>
              <svg
                className={styles["frame-3387__vector-76"]}
                width="9"
                height="6"
                viewBox="0 0 9 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 3L3 6L9 0"
                  stroke="#1751F0"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <CheckBoxChecked/>
            </div>
          </div>
          <div className={styles["frame-3387__typologie-de-vente-libre-voir-white-paper"]}>
            Typologie de vente libre (voir white paper )
          </div>
        </div>
        <div className={styles["frame-3387__frame-3383"]}>
          <CheckBoxChecked/>
          <div className={styles["frame-3387__possibilit-de-vendre-sur-notre-marketplace-exclusive"]}>
            Possibilité de vendre sur notre marketplace
            <br />
            exclusive
          </div>
        </div>
        <div className={styles["frame-3387__frame-3384"]}>
          <CheckBoxChecked/>
          
          <div className={styles["frame-3387__possibilit-de-laisser-l-uvre-en-galerie"]}>
            Possibilité de laisser l&#039;œuvre en galerie
          </div>
        </div>
      </div>
  </div>

  )
}

export default InvestmentCardDetail