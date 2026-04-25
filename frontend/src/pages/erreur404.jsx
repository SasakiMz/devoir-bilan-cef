import { Link } from "react-router-dom";


const Erreur404 = () => {
    return (
        <div>
            <div>
                <h1>Navré</h1>
                <p>Mais nous n'avons pas pu trouver cette page...</p>
                <p>Elle a du être supprimée ou déplacée</p>
                <button><Link>Retour à l'accueil</Link></button>
            </div>
        </div>
        
        
    )
}

export default Erreur404;