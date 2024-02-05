// pages/index.js or the page where you want to display the cards
import React from 'react';
import InvestmentCard from './InvestmentCard';
import styles from './Investment.module.scss'

const Investment = () => {
  const cards = [
    {
      number: '01',
      title1: 'Maître d’art',
      title2: 'Pour un investisseur',
      details: 'More details about Card 1...',
      imageSrc: '/img/investmentCard1.png',
    },
    {
      number: '02',
      title1: 'Carré d\'art',
      title2: 'Pour nos collectioneurs',
      details: 'More details about Card 2...',
      imageSrc: '/img/investmentCard2.png',
    },
    {
      number: '03',
      title1: 'Cubique',
      title2: 'Pour lesfans',
      details: 'More details about Card 3...',
      imageSrc: '/img/investmentCard3.png',
    }
    
  ];

  return (
    <div className={styles.investmentContainer}>
      {cards.map((card, index) => (
        <InvestmentCard key={index} number={card.number} title1={card.title1} title2={card.title2} details={card.details} imageSrc={card.imageSrc} />
      ))}
    </div>
  );
};

export default Investment;
