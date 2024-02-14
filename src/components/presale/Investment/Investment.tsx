// pages/index.js or the page where you want to display the cards
import React from 'react';
import InvestmentCard from './InvestmentCard';
import styles from './Investment.module.scss'
import useSharedLogicInvestment from './useSharedLogicInvestment';
import { useAppContext } from '../../../context';
import { Lang } from '../../../types/types';

const Investment = () => {
  //Get the language of the global context
  const {lang} = useAppContext()
  const lang_ = lang as Lang
  const {texts, setTexts} = useSharedLogicInvestment()

  const cards = [
    texts.card1,
    texts.card2,
    texts.card3
  ]

  return (
    <div className={styles.investmentContainer}>
      {cards.map((card, index) => (
        <InvestmentCard key={index} number={card.number[lang_]} title1={card.title1[lang_]} title2={card.title2[lang_]} details={card.details[lang_]} imageSrc={card.backgroundImage} />
      ))}
    </div>
  );
};

export default Investment;
