import { Link } from "react-router-dom";

import "../styles/erreur404.scss";
import erreur404 from "../assets/img/erreur-404.png"

const Erreur404 = () => {
    return (
        <div>
            <div className="headerbleu"></div>
            {/* Texte erreur avec bouton retour à la page d'accueil */}
            <div className=" main-pageerror row align-items-center">
                <div className="col-12 col-md-6 mb-4 mb-md-0 text-center">
                    <h1>Navré</h1>
                    <p>Mais nous n'avons pas pu trouver cette page...</p>
                    <p>Elle a du être supprimée ou déplacée</p>
                    <button className="btn-error"><Link to="/" className="link-btn">Retour à l'accueil</Link></button>
                </div>
                {/* Image erreur */}
                <div className="col-12 col-md-6 text-center">
                    <img src={erreur404} alt="Erreur 404" className="img-fluid"/>
                </div>
            </div>
        </div>
    )
}

export default Erreur404;