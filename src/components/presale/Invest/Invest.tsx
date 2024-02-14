// pages/index.tsx

import React from 'react';

import styles from './Invest.module.scss'; 
import { useAppContext } from '../../../context';
import useSharedLogicInvestment from '../Investment/useSharedLogicInvestment';
import { Lang } from '../../../types/types';
import InvestCard from './InvestCard';


// Define a type for the image block data
interface ImageBlockData {
  number: string;
  title1: string;
  title2: string;
  backgroundImage: string;
  desc: string;
  listItems?: string[];
}

const Invest = () =>  {
  /*
  const imageBlocksData: ImageBlockData[] = [
    {
      number: '01',
      title1: 'Title 1',
      title2: 'Title 2',
      backgroundImage: 'url(/img/investmentCard1.webp)',
      desc: 'DESC1',
      listItems: ['Item 1', 'Item 2']
    },
    {
      number: '02',
      title1: 'Title 1',
      title2: 'Title 2',
      backgroundImage: 'url(/img/investmentCard2.png)',
      desc: 'DESC2',
      listItems: ['Item 1', 'Item 2']
    },
    {
      number: '03',
      title1: 'Title 1',
      title2: 'Title 1',
      backgroundImage: 'url(/img/investmentCard3.webp)',
      desc: 'DESC3',
      listItems: ['Item 1', 'Item 2']
    }
    
  ];
*/

    //Get the language of the global context
    const {lang} = useAppContext()
    const lang_ = lang as Lang
    const {texts, setTexts} = useSharedLogicInvestment()
  
    const cards = [
      texts.card1,
      texts.card2,
      texts.card3
    ]

    console.log(cards)
  return (
    <div className={styles.imageBlockContainer}>
        
      {cards.map((data, index) => (
        <InvestCard key={index} 
          number={data.number[lang_]} 
          title1={data.title1[lang_]} 
          title2={data.title2[lang_]} 
          backgroundImage={data.backgroundImage} 
          details={data.details[lang_]} 
          details1={data.details1[lang_]}
          details2={data.details2[lang_]}
          />
      ))}
    </div>
  );
}

export default Invest
