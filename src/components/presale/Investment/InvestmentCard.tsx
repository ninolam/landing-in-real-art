// Card.js
import React, { useState } from 'react'
import styles from './Investment.module.scss'


export interface InvestmentCardProps {
    number: string,
    title1: string,
    title2: string,
    details: string,
    imageSrc: string
}

const InvestmentCard = ({ number, title1, title2, details, imageSrc }: InvestmentCardProps) => {
    
  const [isHovered, setIsHovered] = useState(false);

  let borderRadius= ''
  if (number === '03') {
    borderRadius = '0px 50px 50px 0px'
  }

  return (
    <div

        className={styles.card}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{ backgroundImage: `url(${imageSrc})`, borderRadius: `${borderRadius}` }}
    >
        
        <div className={styles.cardTitleContainer}>
            <div className={styles.cardTitleNumber}>{number}</div>
            <div className={styles.cardTitle}>
                <div className={styles.cardTitle1}>{title1}</div>
                <div className={styles.cardTitle2}>{title2}</div>
            </div>
        </div>
      {isHovered && <div className={styles.details}>{details}</div>}

    </div>
  );
};

export default InvestmentCard;
