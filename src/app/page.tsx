import Image from 'next/image'
import vector2191 from '../../src/images/vector-219-1.svg'
import vector219 from '../../src/images/vector-219.svg'
import rayul from '../../src/images/rayul.png'
import jusdevoyage1 from '../../src/images/jusdevoyage-a7unalmmqi-unsplash-1.png'


import styles from './page.module.css'

import Footer from '../components/Footer'
import Header from '../components/Header'
import Menu from '../components/Menu'
import HowToJoinIra from '../components/HowToJoinIra'
import Artists from '../components/Artists'
import JoinMovement from '../components/JoinMovement'
import HelpIra from '../components/HelpIra'
import NewsLetter from '../components/NewsLetter'
import Team from '../components/Team'

export default function Home() {
  return (
    <div className="LP">
      <div className="div">

        <JoinMovement/>
        
        <Artists/>

        <HelpIra/>
        
        <NewsLetter/>

        <HowToJoinIra/>
        
        <Team/>

        <Header/>
        
        <Menu/>

        <Footer/>
        
        
      </div>
    </div>

     )
}
