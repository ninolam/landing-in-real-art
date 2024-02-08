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

  return (
    <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{ backgroundImage: `url(${imageSrc})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
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
