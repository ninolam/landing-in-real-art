import Menu from "../../components/Menu";
import Artists from "../../components/home/Artists";
import Faq from "../../components/home/Faq";
import Footer from "../../components/home/Footer";
import HeroSection from "../../components/home/HeroSection";
import HowToJoinIra from "../../components/home/HowToJoinIra";
import JoinMovement from "../../components/home/JoinMovement";
import Newsletter from "../../components/home/Newsletter";
import Team from "../../components/home/Team";

export default function HomePage() {

    return (

      <div className="home">

        <HeroSection />

        <HowToJoinIra/>

        <JoinMovement/>


        <Artists />


        <Team/>

        <Faq/>

        <Newsletter/>

        <Footer/>

        <Menu/>        
    </div>

    )


}    