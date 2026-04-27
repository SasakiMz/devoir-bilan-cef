import { Link } from "react-router-dom";

import "../styles/erreur404.scss";
import erreur404 from "../assets/img/erreur-404.png"

const Erreur404 = () => {
    return (
        <div>
            <div className="headerbleu"></div>
            <div className="d-flex main-pageerror">
                <div className="col text-center">
                    <h1>Navré</h1>
                    <p>Mais nous n'avons pas pu trouver cette page...</p>
                    <p>Elle a du être supprimée ou déplacée</p>
                    <button className="btn-error"><Link className="link-btn">Retour à l'accueil</Link></button>
                </div>
                <div className="col">
                    <img src={erreur404} alt="Erreur 404"/>
                </div>
            </div>
        </div>
    )
}

export default Erreur404;