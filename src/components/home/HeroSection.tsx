"use client"

const HeroSection = () => { 

    return (
        <div className="hero-section">
        <div className="wrapper-top-contain">
          <div className="top-contain">
            <div className="title">
              <div className="heading">
                <span>
                  <span className="heading-span">
                    Rendre le web3 réel et
                    <br />
                  </span>
                  <span className="heading-span2">vice-versa</span>
                </span>
              </div>
            </div>
            <div className="container-button">
              <div className="button-hero-section">
                <div className="rejoindre-ira">Rejoindre IRA</div>
              </div>
              <div className="button-hero-section">
                <div className="je-d-marre">Je démarre</div>
              </div>
            </div>
            
          </div>
          <img className="union-2" alt="Union" src="/img/union.png" />
        </div>
        <div className="parapgraphe">
          <div className="paragraph">
            Notre mission est de briser les frontières entre l’art numérique et
            l’art physique pour démocratiser le pouvoir du Web3 dans le monde de
            l’art
          </div>
         
        </div>
      </div>

    )

}

export default HeroSection