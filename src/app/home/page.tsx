import Menu from "../../components/home/Menu";
import Faq from "../../components/home/Faq";
import Footer from "../../components/Footer";
import HeroSection from "../../components/home/HeroSection";
import HowToJoinIra from "../../components/home/HowToJoinIra";
import JoinMovement from "../../components/home/JoinMovement";
import Newsletter from "../../components/home/Newsletter";
import Team from "../../components/home/Team";
import CarouselComponent from "../../components/home/CarouselArtists";

export default function HomePage() {

    return (

      <div className="home">

        <HeroSection />

        <Menu/>
        
        <HowToJoinIra/>

        <JoinMovement/>

        <CarouselComponent/>
        
        <Team/>

        <Faq/>

        <Newsletter/>

        <Footer/>


    </div>

    )


}    