"use client"
import Footer from "../../components/footer/Footer"
import Menu from "../../components/menu/Menu"
import BuyingProcess from "../../components/presale/BuyingProcess"
import DropPanel from "../../components/presale/DropPanel"
import HeroSection from "../../components/presale/HeroSection"
import PresalePros from "../../components/presale/PresalePros"


export default function PresalePage() {
    return (
        <>
        <div className="index">
            <div className="frame">

                <HeroSection/>

                <Menu/>

                <DropPanel/>

                <PresalePros/>

                <BuyingProcess/>
                
                <Footer/>

            </div>
        </div>
        </>
    )
}


        