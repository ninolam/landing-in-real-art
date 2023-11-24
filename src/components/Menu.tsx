

const Menu = () => {
    return (
        <div className="menu">
            <img className="logo-2" alt="Logo" src="/img/logo.png" />
            <div className="wrapper-link">
                <div className="div-2">
                <div className="add" />
                <div className="link-text">
                    <div className="text-wrapper-20">Communauté</div>
                </div>
                <div className="link-text">
                    <div className="text-wrapper-20">Equipe</div>
                </div>
                <div className="link-text">
                    <div className="text-wrapper-20">A propos</div>
                </div>
                <div className="link-text">
                    <div className="text-wrapper-20">Ressources</div>
                </div>
                </div>
                <div className="div-2">
                <button className="button-5">
                    <div className="text-wrapper-5">prévente</div>
                </button>
                <button className="button">
                    <div className="text-wrapper-5">testnet</div>
                </button>
                </div>
            </div>
        </div>

    )
}

export default Menu