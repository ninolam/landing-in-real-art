// Card.js
import React, { useState } from 'react'
import styles from './Investment.module.scss'
import InvestmentCardDetail from './InvestmentCardDetail';


export interface InvestmentCardProps {
    number: string,
    title1: string,
    title2: string,
    details: string,
    imageSrc: string
}

const InvestmentCard = ({ number, title1, title2, details, imageSrc }: InvestmentCardProps) => {
    
  const [isHovered, setIsHovered] = useState(false);

  const widthToGoVertically = 900

  let borderRadius= ''
  let styleCard = ''
  if (number === '01' ) {
    borderRadius = '50px 0px 0px 50px'
    if (window.innerWidth < widthToGoVertically) {
      borderRadius = '50px 50px 0px 0px'
    }
    styleCard = styles.card1
  }
  else if (number === '03' ) {
    borderRadius = '0px 50px 50px 0px'
    if (window.innerWidth < widthToGoVertically) {
      borderRadius = '0px 0px 50px 50px'
    }  
    styleCard = styles.card3
  }
  else if (number === '03' ) {
    styleCard = styles.card2
  }  

  return (
    <div
        className=''
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{ backgroundImage: `url(${imageSrc})`, backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: `${borderRadius}` }}
    >
        
        <div className={styles.cardTitleContainer}>
            <div>
              <span className={styles.cardTitleNumber}>{number}</span>
              <span className={styles.cardTitle1}>{title1}</span>
              <span className={styles.cardTitle2}>{title2}</span>
            </div>
            {
              /*
                <div className={styles.cardTitle}>
                  <div className={styles.cardTitle1}>{title1}</div>
                  <div className={styles.cardTitle2}>{title2}</div>
                </div>
              */
            }
            
        </div>
      {/*isHovered && <InvestmentCardDetail/>*/}

    </div>
  );
};

export default InvestmentCard;
