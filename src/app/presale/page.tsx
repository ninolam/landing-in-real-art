"use client"
import Footer from "../../components/home/Footer"
import DropPanel from "../../components/presale/DropPanel"
import HeroSection from "../../components/presale/HeroSection"
import PresalePros from "../../components/presale/PresalePros"


export default function PresalePage() {
    return (
        <>
        <div className="index">
            <div className="frame">

                <HeroSection/>

                <DropPanel/>

                <PresalePros/>

                {/*                
                <div className="frame-29">
                <div className="frame-11">
                    <img
                    className="logo"
                    alt="Logo"
                    src="https://cdn.animaapp.com/projects/655cacc35c6faf1eb176ebc4/releases/657325d4ed28baa6bd577524/img/logo@2x.png"
                    />
                    <img
                    className="link-text"
                    alt="Frame"
                    src="https://cdn.animaapp.com/projects/655cacc35c6faf1eb176ebc4/releases/657325d4ed28baa6bd577524/img/frame-3352.svg"
                    />
                    <p className="text-wrapper-9">Rendez physique vos œuvres digital</p>
                </div>
                <div className="frame-30">
                    <div className="group">
                    <div className="text-wrapper-10">Nos pages</div>
                    <div className="text-wrapper-11">Accueil</div>
                    <div className="text-wrapper-12">A propos</div>
                    <div className="text-wrapper-13">Marketplace</div>
                    <div className="text-wrapper-14">FAQ</div>
                    </div>
                    <div className="group-2">
                    <div className="text-wrapper-10">Entreprise</div>
                    <div className="text-wrapper-11">Equipes</div>
                    <div className="text-wrapper-12">Partenaire</div>
                    <div className="text-wrapper-13">CGU</div>
                    </div>
                    <img
                    className="line"
                    alt="Line"
                    src="https://cdn.animaapp.com/projects/655cacc35c6faf1eb176ebc4/releases/655cba0f644f323bcc03ce80/img/line-5-5.svg"
                    />
                    <div className="group-3">
                    <div className="text-wrapper-10">Contact</div>
                    <p className="text-wrapper-11">02 00 00 00 00</p>
                    <div className="text-wrapper-12">01 Rue Dory, Paris</div>
                    <div className="text-wrapper-13">Mail@gmail.com</div>
                    </div>
                </div>
                </div>
    */}
                <Footer/>

                <header className="header">
                <img
                    className="logo"
                    alt="Logo"
                    src="https://cdn.animaapp.com/projects/655cacc35c6faf1eb176ebc4/releases/657325d4ed28baa6bd577524/img/logo-1@2x.png"
                />
                <div className="wrapper-link">
                    <div className="div-2">
                    <div className="link-text" />
                    <div className="link-text-2">
                        <div className="text-wrapper-15">Communauté</div>
                    </div>
                    <div className="link-text-2">
                        <div className="text-wrapper-15">Equipe</div>
                    </div>
                    <div className="link-text-2">
                        <div className="text-wrapper-15">A propos</div>
                    </div>
                    <div className="link-text-2">
                        <div className="text-wrapper-15">Ressources</div>
                    </div>
                    </div>
                    <div className="div-2">
                    <button className="button-3">
                        <div className="text-wrapper-6">prévente</div>
                    </button>
                    <button className="button-4">
                        <div className="text-wrapper-6">testnet</div>
                    </button>
                    </div>
                </div>
                </header>
            </div>
        </div>
        </>
    )
}


        