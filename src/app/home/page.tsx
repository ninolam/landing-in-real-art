import Menu from "../../components/home/Menu";
import Faq from "../../components/home/Faq/Faq";
import Footer from "../../components/footer/Footer";
import HeroSection from "../../components/home/HeroSection/HeroSection";
import HowToJoinIra from "../../components/home/JoinIRA/HowToJoinIra";
import JoinMovement from "../../components/home/JoinMovement/JoinMovement";
import Newsletter from "../../components/home/Newsletter/Newsletter";
import Team from "../../components/home/Team/Team";
import CarouselComponent from "../../components/home/Artists/CarouselArtists";

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